function navigateToPage() {
    var dropdown = document.getElementById("search-dropdown");
    var selectedValue = dropdown.value;

    // Check if a valid option is selected
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}