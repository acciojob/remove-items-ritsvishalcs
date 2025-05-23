// Add event listener after DOM loads
window.onload = function () {
    // Get reference to the button
    const button = document.querySelector('input[type="button"]');

    // Attach click handler
    button.addEventListener('click', function () {
        const select = document.getElementById('colorSelect');

        // Remove the selected option if there is one
        if (select.selectedIndex !== -1) {
            select.remove(select.selectedIndex);
        }
    });
};
