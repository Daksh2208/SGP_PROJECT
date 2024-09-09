// Example organic fertilizers list for autocomplete
const organicFertilizers = [
    "Compost", "Manure", "Bone Meal", "Blood Meal", "Fish Emulsion", "Seaweed Extract",
    "Worm Castings", "Alfalfa Meal", "Kelp Meal", "Green Manure", "Bat Guano", "Feather Meal",
    "Wood Ash", "Chicken Manure", "Coffee Grounds", "Eggshells", "Neem Cake", "Rock Phosphate",
    "Vermicompost", "Soybean Meal", "Cottonseed Meal", "Sul-Po-Mag", "Epsom Salts", "Crab Meal",
    "Humic Acid", "Mineral Supplements", "Biochar", "Organic Mulch", "Rice Hulls", "Lime",
    "Gypsum", "Coconut Coir", "Mushroom Compost"
];

// Function to show autocomplete suggestions
function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    if (value) {
        const regex = new RegExp(value, 'i');
        const filteredFertilizers = organicFertilizers.filter(fertilizer => regex.test(fertilizer));

        filteredFertilizers.forEach(fertilizer => {
            const div = document.createElement('div');
            div.textContent = fertilizer;
            div.onclick = function() {
                document.getElementById('search-input').value = fertilizer;
                suggestionsBox.innerHTML = '';
                searchFertilizers();
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
function searchFertilizers() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.fertilizer-item');

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
