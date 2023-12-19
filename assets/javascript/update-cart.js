document.addEventListener("DOMContentLoaded", function () {
    // Track the counts of each item and their corresponding prices
    var itemCounts = {};
    var itemPrices = {};

    // Get the discount amount element
    var discountAmountElement = document.getElementById('discount-price');

    // Calculate discount and update discount display
    function updateDiscount() {
        var totalElement = document.getElementById('total-price');
        if (totalElement) {
            // Get the total price as a float
            var total = parseFloat(totalElement.textContent.replace('$', ''));

            // Calculate 10% of the total
            var discount = total * 0.1;

            // Update the discount amount display
            if (discountAmountElement) {
                discountAmountElement.textContent = '-$' + discount.toFixed(2);
            }

            // Subtract the discount from the total
            var discountedTotal = total - discount;

            // Update the total price display
            totalElement.textContent = '$' + discountedTotal.toFixed(2);
        }
    }

    // Select all elements with the classes 'item-product-left' or 'item-product-right'
    var itemProducts = document.querySelectorAll('.item-product-left, .item-product-right');

    // Attach a click event listener to each item product element
    itemProducts.forEach(function (itemProduct) {
        itemProduct.addEventListener('click', function () {
            // Extract category, title, and price information from the clicked item
            var category = getCategory(itemProduct);
            var title = getTitle(itemProduct);
            var priceIndicator = getPriceIndicator(itemProduct);

            // Update the floating basket display and track item price
            updateFloatingBasket(category, title, priceIndicator);
            itemPrices[category + '-' + title] = priceIndicator;

            // Update the total price display
            updateTotalPrice();

            // Apply and show the discount
            updateDiscount();
        });
    });

    // Get the category ID from the closest ancestor with the class 'main-container'
    function getCategory(itemProduct) {
        var categoryElement = itemProduct.closest('.main-container').querySelector('.category-name div');
        return categoryElement.getAttribute('id');
    }

    // Get the text content of the 'title' element within the item product
    function getTitle(itemProduct) {
        var titleElement = itemProduct.querySelector('.title');
        return titleElement.textContent;
    }

    // Get the text content of the 'price-indicator' element within the item product
    function getPriceIndicator(itemProduct) {
        var priceElement = itemProduct.querySelector('.price-indicator');
        return priceElement.textContent;
    }

    // Update the floating basket display based on the selected item
    function updateFloatingBasket(category, title, priceIndicator) {
        var itemKey = category + '-' + title;

        // Check if the item is already in the basket
        if (itemCounts[itemKey]) {
            // If yes, increment the count and update the existing item
            itemCounts[itemKey]++;
            updateExistingItem(itemKey, itemCounts[itemKey]);
        } else {
            // If no, create a new item in the basket
            var newItemDiv = document.createElement('div');
            newItemDiv.dataset.itemKey = itemKey;
            document.querySelector('.item-options').appendChild(newItemDiv);

            itemCounts[itemKey] = 1;
        }

        // Update the content of the item element with quantity and total price
        var itemElement = document.querySelector('.item-options [data-item-key="' + itemKey + '"]');
        if (itemElement) {
            var count = itemCounts[itemKey];
            var itemPrice = parseFloat(priceIndicator.replace('$', ''));
            var totalItemPrice = itemPrice * count;
            itemElement.textContent = title + ' x' + count + ' - $' + totalItemPrice.toFixed(2);
            itemElement.dataset.count = count;
        }
    }

    // Update the existing item in the basket with the latest quantity and total price
    function updateExistingItem(itemKey, count) {
        var existingItemDiv = document.querySelector('.item-options [data-item-key="' + itemKey + '"]');

        if (existingItemDiv) {
            var title = existingItemDiv.textContent.split(' x')[0];
            var itemPrice = parseFloat(itemPrices[itemKey].replace('$', ''));
            var totalItemPrice = itemPrice * count;
            existingItemDiv.textContent = title + ' x' + count + ' - $' + totalItemPrice.toFixed(2);
            existingItemDiv.dataset.count = count;
        }
    }

    // Update the total price displayed on the checkout button
    function updateTotalPrice() {
        var total = 0;

        // Iterate through each key in the itemCounts object
        for (var key in itemCounts) {
            // Retrieve the price for the current item
            var itemPrice = parseFloat(itemPrices[key].replace('$', ''));

            // Retrieve the count for the current item
            var itemCount = itemCounts[key];

            // Add the total price for the current item to the total
            total += itemPrice * itemCount;
        }

        // Update the content of the total-price element
        var totalElement = document.getElementById('total-price');
        if (totalElement) {
            totalElement.textContent = '$' + total.toFixed(2);
            console.log('Total:', total.toFixed(2));
        }
    }
});