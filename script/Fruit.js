// Example fruit list for autocomplete
const fruits = [
    "Apple", "Apricot", "Avocado", "Banana", "Bael", "Ber", "Blackberry", "Blueberry",
    "Cantaloupe","Carambola", "Cashew Apple", "Chikoo","Cranberry", "Coconut", "Custard Apple", 
    "Dragon Fruit","Durian Fruit","Fig","Feijoa", "Gooseberry", "Grapes", "Guava","Jamun",  "Kokum",
    "Kiwi", "Lime", "Lychee", "Mango", "Mulberry","Muskmelon", "Nance", "Orange", 
    "Papaya", "Peach", "Pear", "Passion Fruit","Passion Fruit", "Pineapple", "Plum", 
    "Pomegranate","Rambutan","Raspberry","Starfruit", "Strawberry", "Sweet Lime", 
    "Tamarind","Watermelon","Ximenia", "Yellow Passion Fruit"
];


// Function to show autocomplete suggestions
function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    if (value) {
        const regex = new RegExp(value, 'i');
        const filteredFruits = fruits.filter(fruit => regex.test(fruit));

        filteredFruits.forEach(fruit => {
            const div = document.createElement('div');
            div.textContent = fruit;
            div.onclick = function() {
                document.getElementById('search-input').value = fruit;
                suggestionsBox.innerHTML = '';
                searchFruits();
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
function searchFruits() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.fruit-item'); // Ensure your HTML uses .fruit-item for fruits

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
