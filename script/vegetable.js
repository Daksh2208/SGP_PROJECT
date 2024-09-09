// Example vegetable list for autocomplete
const vegetables = [
    "Amaranth", "Arbi", "Artichoke", "Ash gourd", "Aubergine", "Bamboo shoots", "Bell pepper",
    "Bitroot", "Bitter Gourd", "Bok choy", "Bottle gourd", "Broad beans", "Brocoli", "Cabbage",
    "Carrot", "Cauliflower", "Celery", "Chayote", "Cluster Beans", "Colocasia leaves", "Cucumber",
    "Drumstic", "Elephant foot yam", "Endive", "Fava bens", "Fennel Bulb", "Fenugreek Leaves",
    "Galangal", "Garlic", "Ginger", "Green beans", "Green chilies", "Green peas", "Hyacinth Beans",
    "Ivy Gourd", "Jackfruit", "Kale", "Kohlrabi", "Ladyfinger", "Leeks", "Lemongrass", "Lettuce",
    "Mint", "Mustard Greens", "Nettle Leaves", "Onion", "Potatoes", "Pumpkin", "Quinoa Leaves",
    "Radish", "Ridge Gourd", "Rocket Leaves", "Spinach", "Spring Onion", "Sweet Potato", "Tomatoes",
    "Turnip", "Yam", "Yardlong Beans", "Zucchini"
];


// Function to show autocomplete suggestions
function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    if (value) {
        const regex = new RegExp(value, 'i');
        const filteredVegetables = vegetables.filter(vegetable => regex.test(vegetable));

        filteredVegetables.forEach(vegetable => {
            const div = document.createElement('div');
            div.textContent = vegetable;
            div.onclick = function() {
                document.getElementById('search-input').value = vegetable;
                suggestionsBox.innerHTML = '';
                searchVegetables();
            };
            suggestionsBox.appendChild(div);
        });

        // Show the suggestions box
        suggestionsBox.style.display = 'block';
    } else {
        // Hide the suggestions box if input is empty
        suggestionsBox.style.display = 'none';
    }
}

// Function to handle search
function searchVegetables() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.vegetable-item'); // Adjust class name as needed

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        article.style.display = title.includes(query) ? 'block' : 'none';
    });

    // Hide the suggestions box after searching
    document.getElementById('suggestions').style.display = 'none';
}

// Hide the suggestions box if clicking outside
document.addEventListener('click', function(event) {
    if (!document.querySelector('.search-bar').contains(event.target)) {
        document.getElementById('suggestions').style.display = 'none';
    }
});
