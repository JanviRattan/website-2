// document.addEventListener("DOMContentLoaded", function () {
//     // Object to keep track of the count for each item
//     var itemCounts = {};

//     // Get all item-products
//     var itemProducts = document.querySelectorAll('.item-product-left, .item-product-right');

//     // Add click event listener to each item-product
//     itemProducts.forEach(function (itemProduct) {
//         itemProduct.addEventListener('click', function () {
//             // Get the category of the clicked item-product
//             var category = getCategory(itemProduct);

//             // Get the title and price of the clicked item-product
//             var title = getTitle(itemProduct);
//             var price = getPrice(itemProduct);

//             // Update the floating basket
//             updateFloatingBasket(category, title, price);
//         });
//     });

//     // Function to get the category of an item-product
//     function getCategory(itemProduct) {
//         var categoryElement = itemProduct.closest('.main-container').querySelector('.category-name div');
//         return categoryElement.getAttribute('id');
//     }

//     // Function to get the title of an item-product
//     function getTitle(itemProduct) {
//         var titleElement = itemProduct.querySelector('.title');
//         return titleElement.textContent;
//     }

//     // Function to get the price of an item-product
//     function getPrice(itemProduct) {
//         var priceElement = itemProduct.querySelector('.price-indicator');
//         return parseFloat(priceElement.textContent.replace('$', ''));
//     }

//     // Function to update the floating basket
//     function updateFloatingBasket(category, title, price) {
//         // Find the corresponding item-category div in the floating basket
//         var itemCategoryElement = document.getElementById('item-' + category);

//         // Create a key for the item in the itemCounts object
//         var itemKey = category + '-' + title;

//         // Check if the item is already in the basket
//         if (itemCounts[itemKey]) {
//             // If yes, increment the count
//             itemCounts[itemKey]++;
//             // Update the existing item's count in the floating basket
//             updateExistingItem(itemKey, itemCounts[itemKey]);
//         } else {
//             // If not, add a new div for the added item with count
//             var newItemDiv = document.createElement('div');
//             newItemDiv.textContent = title + ' x1';
//             newItemDiv.dataset.count = 1;
//             newItemDiv.dataset.itemKey = itemKey;

//             // Append the new div under the "Your Order" line
//             document.querySelector('.item-options').appendChild(newItemDiv);

//             // Update the count in the itemCounts object
//             itemCounts[itemKey] = 1;
//         }

//         // Update the row-sub-total with the price
//         var rowSubTotalElement = itemCategoryElement.closest('.item-cart').querySelector('.row-sub-total');
//         var currentSubTotal = parseFloat(rowSubTotalElement.textContent.replace('$', ''));
//         var newSubTotal = currentSubTotal + price;
//         rowSubTotalElement.textContent = '$' + newSubTotal.toFixed(2);
//     }

//   // Function to update the count of an existing item in the floating basket
// function updateExistingItem(itemKey, count) {
//     var existingItemDiv = document.querySelector('.item-options [data-item-key="' + itemKey + '"]');
    
//     if (existingItemDiv) {
//         var title = existingItemDiv.textContent.split(' x')[0];
//         existingItemDiv.textContent = title + ' x' + count;
//         existingItemDiv.dataset.count = count;
//     }
// }




// });


document.addEventListener("DOMContentLoaded", function () {
    // Object to keep track of the count for each item
    var itemCounts = {};
    var itemPrices = {};

    // Get all item-products
    var itemProducts = document.querySelectorAll('.item-product-left, .item-product-right');

    // Add click event listener to each item-product
    itemProducts.forEach(function (itemProduct) {
        itemProduct.addEventListener('click', function () {
            // Get the category of the clicked item-product
            var category = getCategory(itemProduct);

            // Get the title, price, and price indicator of the clicked item-product
            var title = getTitle(itemProduct);
            var price = getPrice(itemProduct);
            var priceIndicator = getPriceIndicator(itemProduct);

            // Update the floating basket
            updateFloatingBasket(category, title, price);

            // Store the price indicator for later use in total calculation
            itemPrices[category + '-' + title] = priceIndicator;
            
            // Update the total price
            updateTotalPrice();
        });
    });

    // Function to get the category of an item-product
    function getCategory(itemProduct) {
        var categoryElement = itemProduct.closest('.main-container').querySelector('.category-name div');
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

    // Function to get the price indicator of an item-product
    function getPriceIndicator(itemProduct) {
        var priceElement = itemProduct.querySelector('.price-indicator');
        return priceElement.textContent;
    }

    // Function to update the floating basket
    function updateFloatingBasket(category, title, price) {
        // Find the corresponding item-category div in the floating basket
        var itemCategoryElement = document.getElementById('item-' + category);

        // Create a key for the item in the itemCounts object
        var itemKey = category + '-' + title;

        // Check if the item is already in the basket
        if (itemCounts[itemKey]) {
            // If yes, increment the count
            itemCounts[itemKey]++;
            // Update the existing item's count in the floating basket
            updateExistingItem(itemKey, itemCounts[itemKey]);
        } else {
            // If not, add a new div for the added item with count
            var newItemDiv = document.createElement('div');
            newItemDiv.textContent = title + ' x1';
            newItemDiv.dataset.count = 1;
            newItemDiv.dataset.itemKey = itemKey;

            // Append the new div under the "Your Order" line
            document.querySelector('.item-options').appendChild(newItemDiv);

            // Update the count in the itemCounts object
            itemCounts[itemKey] = 1;
        }

        // Update the row-sub-total with the price
        var rowSubTotalElement = itemCategoryElement.closest('.item-cart').querySelector('.row-sub-total');
        var currentSubTotal = parseFloat(rowSubTotalElement.textContent.replace('$', ''));
        var newSubTotal = currentSubTotal + price;
        rowSubTotalElement.textContent = '$' + newSubTotal.toFixed(2);
    }

    // Function to update the count of an existing item in the floating basket
    function updateExistingItem(itemKey, count) {
        var existingItemDiv = document.querySelector('.item-options [data-item-key="' + itemKey + '"]');
        
        if (existingItemDiv) {
            var title = existingItemDiv.textContent.split(' x')[0];
            existingItemDiv.textContent = title + ' x' + count;
            existingItemDiv.dataset.count = count;
        }
    }

    // Function to update the total price
    function updateTotalPrice() {
        var total = 0;
        // Iterate through itemCounts and calculate the total price
        for (var key in itemCounts) {
            total += itemCounts[key] * itemPrices[key];
        }

        // Update the total element with the new total price
        var totalElement = document.querySelector('.checkout-button .label-right');
        if (totalElement) {
            totalElement.textContent = '$' + total.toFixed(2);
        }
    }
});
