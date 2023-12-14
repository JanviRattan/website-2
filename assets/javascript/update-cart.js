document.addEventListener("DOMContentLoaded", function () {
    // Get all item-products
    var itemProducts = document.querySelectorAll('.item-product-left, .item-product-right');

    // Add click event listener to each item-product
    itemProducts.forEach(function (itemProduct) {
        itemProduct.addEventListener('click', function () {
            // Get the category of the clicked item-product
            var category = getCategory(itemProduct);

            // Get the title and price of the clicked item-product
            var title = getTitle(itemProduct);
            var price = getPrice(itemProduct);

            // Update the floating basket
            updateFloatingBasket(category, title, price);
        });
    });

    // Function to get the category of an item-product
    function getCategory(itemProduct) {
        var categoryElement = itemProduct.closest('.product-list').querySelector('.category-name div');
        return categoryElement.getAttribute('id');
    }

    // Function to get the title of an item-product
    function getTitle(itemProduct) {
        var titleElement = itemProduct.querySelector('.title');
        return titleElement.textContent;
    }

    // Function to get the price of an item-product
    function getPrice(itemProduct) {
        var priceElement = itemProduct.querySelector('.price-indicator');
        return parseFloat(priceElement.textContent.replace('$', ''));
    }

    // Function to update the floating basket
    function updateFloatingBasket(category, title, price) {
        // Find the corresponding item-category div in the floating basket
        var itemCategoryElement = document.getElementById('item-category-' + category);

        // Update the text under item-category div
        itemCategoryElement.querySelector('.food-item').textContent = title;

        // Update the row-sub-total with the price
        var rowSubTotalElement = itemCategoryElement.querySelector('.row-sub-total');
        var currentSubTotal = parseFloat(rowSubTotalElement.textContent.replace('$', ''));
        var newSubTotal = currentSubTotal + price;
        rowSubTotalElement.textContent = '$' + newSubTotal.toFixed(2);
    }
});
