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

// Do you see me?

// I'll revert old function, because it correct to add onCLick event. We should add on Click event where the user click, not main cointainer

// document.addEventListener("DOMContentLoaded", function () {
//     // Get the main-container and floating-basket elements
//     const mainContainer = document.querySelector(".main-container");
//     const floatingBasket = document.querySelector(".floating-basket");
  
//     // Add click event listener to the main-container
//     mainContainer.addEventListener("click", function (event) {
//       // Check if the clicked element is an item-product-left or second-item-product-right
//       if (
//         Array.from(event.target.classList).some(className =>
//           className.includes("item-product-left") || className.includes("item-product-right")
//         )
//       ) {
//         // Get the product name and price
//         const productName = event.target.querySelector(".title").textContent.trim();
//         const productPrice = parseFloat(event.target.querySelector(".price-indicator").textContent.replace("$", ""));
  
//         // Determine the category of the clicked item-product
//         let category;
//         if (event.target.closest("#category-a")) {
//           category = "a";
//         } else if (event.target.closest("#category-b")) {
//           category = "b";
//         } else if (event.target.closest("#category-c")) {
//           category = "c";
//         }
  
//         // Update the floating basket content
//         const itemCategoryDiv = floatingBasket.querySelector(`#item-category-${category}`);
//         const itemOptionsDiv = floatingBasket.querySelector(".item-options");
//         const rowSubTotalDiv = floatingBasket.querySelector(".row-sub-total");
  
//         // Update the text under item options
//         itemOptionsDiv.textContent = productName;
  
//         // Update the text under the matching item-category div
//         itemCategoryDiv.textContent = productName;
  
//         // Update the row sub-total with the price
//         rowSubTotalDiv.textContent = `$${productPrice.toFixed(2)}`;
//       }
//     });
//   });
  