//your JS code here. If required.
function removeColor() {
    // Get the select element
    const select = document.getElementById("colorSelect");

    // Remove the selected option
    select.remove(select.selectedIndex);
}
