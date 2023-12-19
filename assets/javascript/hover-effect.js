document.addEventListener('DOMContentLoaded', function() {
    // Select elements with specified classes
    var tabItems = document.querySelectorAll('.tab-item, .tab-item-more');
    var productItems = document.querySelectorAll('.item-product-left, .item-product-right');
    var tabContentMore = document.querySelector('.tab-content-more');

    // Keep track of the currently active tab item
    var activeTabItem = null;

    // Add click effects for tab items
    tabItems.forEach(function(tabItem) {
        // Store the original styles for each tab
        tabItem.originalStyles = {
            color: getComputedStyle(tabItem).color,
            textDecoration: getComputedStyle(tabItem).textDecoration
        };

        tabItem.addEventListener('click', function() {
            // Remove effects from the previously active tab item
            if (activeTabItem) {
                activeTabItem.style.color = activeTabItem.originalStyles.color;
                activeTabItem.style.textDecoration = activeTabItem.originalStyles.textDecoration;
            }

            // Apply effects to the clicked tab item
            tabItem.style.borderBottom = "orange solid 2px";

            // Update the currently active tab item
            activeTabItem = tabItem;

            // Reset color and remove underline from tab-content-more
            tabContentMore.borderBottom = ' #808080 ';
        });

        // Add hover effects
        tabItem.addEventListener('mouseover', function() {
            // Apply hover effect only if the tab item is not the active one
            if (tabItem !== activeTabItem) {
                tabItem.style.color = 'var(--storefront-brand-color-customizable, #FF6347)';
                tabItem.style.textDecoration = 'underline';
            }
        });

        // Remove hover effect
        tabItem.addEventListener('mouseleave', function() {
            // Remove hover effect only if the tab item is not the active one
            if (tabItem !== activeTabItem) {
                tabItem.style.color = tabItem.originalStyles.color;
                tabItem.style.textDecoration = tabItem.originalStyles.textDecoration;
            }
        });
    });

    // Add border color change and box shadow effects for product items
    productItems.forEach(function(productItem) {
        productItem.addEventListener('mouseover', function() {
            productItem.style.border = '1px solid #FF6347';
            productItem.style.boxShadow = '4px 4px 0px 0px rgba(34, 34, 34, 0.16)';
        });

        productItem.addEventListener('mouseleave', function() {
            productItem.style.border = '1px solid #DCDCDC';
            productItem.style.boxShadow = 'none';
        });
    });

    // Add click effects for tab-content-more
    tabContentMore.addEventListener('click', function() {
        // Add your click effects for tab-content-more here
        // You can apply similar logic as for tab items
        // For example:
        tabContentMore.style.color = 'var(--storefront-brand-color-customizable, #FF6347)';
        tabContentMore.style.textDecoration = 'underline';
    });

    // Add hover effects for tab-content-more
    tabContentMore.addEventListener('mouseover', function() {
        // Add your hover effects for tab-content-more here
        // You can apply similar logic as for tab items
        // For example:
        tabContentMore.style.color = 'var(--storefront-brand-color-customizable, #FF6347)';
        tabContentMore.style.textDecoration = 'underline';
    });

    // Remove hover effect for tab-content-more
    tabContentMore.addEventListener('mouseleave', function() {
        // Remove your hover effect for tab-content-more here
        // You can apply similar logic as for tab items
        // For example:
        tabContentMore.style.color = ''; // Add the original color here
        tabContentMore.style.textDecoration = '';
    });
});


// // script.js

// function myFunction(name) {
//     console.log(name);
//     document.getElementById(name).style.borderBottom = "orange solid 2px";
// }

// document.addEventListener('DOMContentLoaded', function() {
//     var tabItems = document.querySelectorAll('.tab-item');

//     tabItems.forEach(function(tabItem) {
//         tabItem.addEventListener('click', function() {
//             resetBorderBottom();
//             myFunction(tabItem.id);
//         });

//         tabItem.addEventListener('mouseover', function() {
//             tabItem.style.borderBottom = 'orange solid 2px';
//         });

//         tabItem.addEventListener('mouseleave', function() {
//             if (tabItem.id !== activeTabItem) {
//                 tabItem.style.borderBottom = '';
//             }
//         });
//     });

//     function resetBorderBottom() {
//         tabItems.forEach(function(tabItem) {
//             tabItem.style.borderBottom = '';
//         });
//     }
// });
