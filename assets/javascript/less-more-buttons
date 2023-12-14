// cart.js
document.addEventListener("DOMContentLoaded", function () {
    // Get all item carts
    var itemCarts = document.querySelectorAll(".item-cart");

    // Attach click events to the less and more buttons
    itemCarts.forEach(function (itemCart) {
        var lessButton = itemCart.querySelector(".less");
        var moreButton = itemCart.querySelector(".more");
        var quantityNumber = itemCart.querySelector(".control-quantity-number");

        lessButton.addEventListener("click", function () {
            updateQuantity(-1);
        });

        moreButton.addEventListener("click", function () {
            updateQuantity(1);
        });

        function updateQuantity(change) {
            // Get the current quantity
            var currentQuantity = parseInt(quantityNumber.textContent, 10);

            // Update the quantity
            var newQuantity = currentQuantity + change;

            // Ensure the quantity is not negative
            newQuantity = Math.max(newQuantity, 0);

            // Update the text in the item cart
            quantityNumber.textContent = newQuantity;
        }
    });
});
