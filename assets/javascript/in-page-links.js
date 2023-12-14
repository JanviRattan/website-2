document.addEventListener('DOMContentLoaded', function() {
    var targetSection = document.getElementById('targetSection');

    // Calculate the height from the top, considering the nav-bar height (40px) and category-tabs height (56px)
    var offset = 40 + 56;

    // Scroll to the target section
    targetSection.scrollIntoView();

    // Adjust the scroll position to make the section appear from a certain height below the top
    window.scrollBy(0, -offset);
});
