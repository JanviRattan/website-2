
document.addEventListener("DOMContentLoaded", function () {
    var itemCounts = {};
    var itemPrices = {};

    var itemProducts = document.querySelectorAll('.item-product-left, .item-product-right');

    itemProducts.forEach(function (itemProduct) {
        itemProduct.addEventListener('click', function () {
            var category = getCategory(itemProduct);
            var title = getTitle(itemProduct);
            var price = getPrice(itemProduct);
            var priceIndicator = getPriceIndicator(itemProduct);

            updateFloatingBasket(category, title, price, priceIndicator);
            itemPrices[category + '-' + title] = priceIndicator;

            updateTotalPrice();
        });
    });

    function getCategory(itemProduct) {
        var categoryElement = itemProduct.closest('.main-container').querySelector('.category-name div');
        return categoryElement.getAttribute('id');
    }

    function getTitle(itemProduct) {
        var titleElement = itemProduct.querySelector('.title');
        return titleElement.textContent;
    }

    function getPrice(itemProduct) {
        var priceElement = itemProduct.querySelector('.price-indicator');
        return parseFloat(priceElement.textContent.replace('$', ''));
    }

    function getPriceIndicator(itemProduct) {
        var priceElement = itemProduct.querySelector('.price-indicator');
        return priceElement.textContent;
    }

    function updateFloatingBasket(category, title, price, priceIndicator) {
        var itemCategoryElement = document.getElementById('item-' + category);
        var itemKey = category + '-' + title;

        if (itemCounts[itemKey]) {
            itemCounts[itemKey]++;
            updateExistingItem(itemKey, itemCounts[itemKey], price);
        } else {
            var newItemDiv = document.createElement('div');
            newItemDiv.textContent = title + ' x1 - $' + price.toFixed(2);
            newItemDiv.dataset.count = 1;
            newItemDiv.dataset.itemKey = itemKey;
            document.querySelector('.item-options').appendChild(newItemDiv);

            itemCounts[itemKey] = 1;
        }

        var rowSubTotalElement = itemCategoryElement.closest('.item-cart').querySelector('.row-sub-total');
        var currentSubTotal = parseFloat(rowSubTotalElement.textContent.replace('$', ''));
        var newSubTotal = currentSubTotal + price;
        rowSubTotalElement.textContent = '$' + newSubTotal.toFixed(2);
    }

    function updateExistingItem(itemKey, count, price) {
        var existingItemDiv = document.querySelector('.item-options [data-item-key="' + itemKey + '"]');

        if (existingItemDiv) {
            var title = existingItemDiv.textContent.split(' x')[0];
            existingItemDiv.textContent = title + ' x' + count + ' - $' + (count * price).toFixed(2);
            existingItemDiv.dataset.count = count;
        }
    }

    function updateTotalPrice() {
        var total = 0;

        for (var key in itemCounts) {
            var itemKeyComponents = key.split('-');
            var category = itemKeyComponents[0];
            var title = itemKeyComponents[1];
            var itemPrice = getPriceByCategoryAndTitle(category, title);
            total += itemCounts[key] * itemPrice;
        }

        var totalElement = document.querySelector('.checkout-button .label-right');
        if (totalElement) {
            totalElement.textContent = '$' + total.toFixed(2);
        }
    }

    function getPriceByCategoryAndTitle(category, title) {
        var itemKey = category + '-' + title;
        return parseFloat(itemPrices[itemKey]);
    }
});


