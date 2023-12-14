document.addEventListener('DOMContentLoaded', function() {

    // Define the classes that should have the hovering effect
    var classesToHover = ['.first-item-product-left', '.second-item-product-right', '.item-product-left', '.item-product-right'];

    // Add event listeners to elements with specified classes
    classesToHover.forEach(function(className) {
        var elements = document.querySelectorAll(className);

        elements.forEach(function(element) {
            // Add hover effect
            element.addEventListener('mouseover', function() {
                element.style.border = '1px solid var(--storefront-brand-color-customizable, #FF6347)';
                element.style.background = 'var(--White, #FFF)';
                element.style.boxShadow = '4px 4px 0px 0px rgba(34, 34, 34, 0.16)';
            });

            // remove hover effect when mouse is not pointed at object
            element.addEventListener('mouseout', function() {
                element.style.border = '1px solid var(--Gainsboro, #DCDCDC)';
                element.style.background = 'var(--White, #FFF)';
                element.style.boxShadow = 'none';
            });





            
        });
    });
});
