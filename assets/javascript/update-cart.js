document.addEventListener("DOMContentLoaded", function () {
    // Get all item carts
    var itemCarts = document.querySelectorAll(".floating-basket .item-cart");

    // Attach a click event to the product list
    document.querySelector(".product-list").addEventListener("click", function (event) {
        // Check if the clicked element is a product name
        if (event.target.classList.contains("title")) {
            // Get the corresponding item cart index
            var index = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode);

            // Get the corresponding product name
            var productName = event.target.textContent;

            // Update the text in the item cart
            itemCarts[index].querySelector(".item-options").textContent = productName;
        }
    });
});

