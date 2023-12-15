document.addEventListener('DOMContentLoaded', function() {
    var targetSection = document.getElementById('targetSection');

    // Calculate the height from the top, considering the nav-bar height (40px) and category-tabs height (56px)
    var offset = 40 + 56;

    // Scroll to the target section
    targetSection.scrollIntoView();

    // Adjust the scroll position to make the section appear from a certain height below the top
    window.scrollBy(0, -offset);
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
        });
    });
});