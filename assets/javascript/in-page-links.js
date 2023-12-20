document.addEventListener('DOMContentLoaded', function() {
   
});


// change color of category links when clicked and reset when another is clicked

document.addEventListener('DOMContentLoaded', function() {
    var tabItems = document.querySelectorAll('.tab-item');

    tabItems.forEach(function(tabItem) {
        tabItem.addEventListener('click', function() {
            // Remove 'clicked' class from all tab items
            tabItems.forEach(function(otherTab) {
                otherTab.classList.remove('clicked');
            });

            // Add 'clicked' class to the clicked tab item
            tabItem.classList.add('clicked');
            var categoryNameElement = tabItem.querySelector('.tab-category-name')
            // Calculate the height from the top, considering the nav-bar height (40px) and category-tabs height (56px)
            var offset = 40 + 80;
            // Scroll to the target section
            var categoryID = categoryNameElement.innerHTML.toString().toLowerCase().replace(/\s+/g, '-');;
            var targetElement = document.getElementById(categoryID)
            window.scrollTo({top: targetElement.offsetTop-offset, behavior: 'smooth'});
        });
    });
})