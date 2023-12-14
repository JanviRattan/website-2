document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    // Get the category tabs container
    var categoryTabs = document.querySelector('.category-tabs');

    // Add a click event listener to the category tabs container
    categoryTabs.addEventListener('click', function (event) {
        // Check if the clicked element is a tab-item
        if (event.target.classList.contains('tab-item')) {
            // Get the text content of the clicked tab
            var categoryName = event.target.textContent.trim().toLowerCase();

            // Scroll to the corresponding category section
            scrollToCategory(categoryName);
        }
    });

    // Function to scroll to the specified category section
    function scrollToCategory(categoryName) {
        // Build the ID of the category section
        var categoryId = 'category-' + categoryName;

        // Get the category section by ID
        var categorySection = document.getElementById(categoryId);

        // Check if the category section exists
        if (categorySection) {
            // Scroll to the category section
            categorySection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }
});
