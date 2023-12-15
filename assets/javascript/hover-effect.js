document.addEventListener('DOMContentLoaded', function() {
    // Define the classes that should have the hovering effect
    var classesToHover = ['.item-product-left', '.item-product-right'];

    // Add event listeners to elements with specified classes
    classesToHover.forEach(function(className) {
        var elements = document.querySelectorAll(className);

        // Initial styles
        var originalStyles = {
            border: '1px solid var(--Gainsboro, #DCDCDC)',
            backgroundColor: '#f6f4f47c',
            color: 'black',
            borderRadius: '8px',
            boxShadow: 'none' // Assuming there was no box shadow initially
        };

        // Add hover effect
        elements.forEach(function(element) {
            element.addEventListener('mouseover', function() {
                element.style.border = '1px solid var(--storefront-brand-color-customizable, #FF6347)';
                element.style.background = 'var(--White, #FFF)';
                element.style.boxShadow = '4px 4px 0px 0px rgba(34, 34, 34, 0.16)';
            });

            // Remove hover effect
            element.addEventListener('mouseleave', function() {
                // Revert to original styles
                element.style.border = originalStyles.border;
                element.style.backgroundColor = originalStyles.backgroundColor;
                element.style.color = originalStyles.color;
                element.style.borderRadius = originalStyles.borderRadius;
                element.style.boxShadow = originalStyles.boxShadow;
            });
        });
    });
});
