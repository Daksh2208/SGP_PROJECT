// Example flower list for autocomplete
const flowers = [
    "Azalea","Amaryllis", "Anthurium", "Aster", "Balsam", "Bluebell", "Bougainvillea", "Canna Lily", 
    "Carnation", "Chrysanthemum", "Daffodil", "Dahlia", "Daisy", "Erythrina","Eustoma", "Evening Primrose", 
    "Flax Flower", "Forget-Me-Not", "Frangipani", "Gardenia", "Gerbera","Gladiolus", "Hibiscus", "Hollyhock",
    "Hydrangea","Indian Blanket Flower (Gaillardia)", "Iris","Ixora","Jacaranda", "Jasmine","Jatropha","Kaffir Lily",
    "Kalanchoe","Kangaroo Paw", "Lavender", "Lily","Lilac","Lotus","Magnolia", "Marigold","Morning Glory", "Nasturtium",
    "Nerium (Oleander)","Nicotiana", "Orchid","Oleander","Oxalis", "Periwinkle","Plumeria","Quisqualis (Rangoon Creeper)",
    "Ranunculus","Rose","Rudbeckia","Salvia","Snapdragon","Sunflower","Tiger Lily","Tuberose","Tulip","Ursinia","Uvaria",
    "Verbena","Vinca","Water Lily","Winter Jasmine","Wisteria","Xanthoceras","Xeranthemum","Yarrow","Yellow Bell","Yellow Oleander",
    "Zephyranthes (Rain Lily)","Zinnia"
];

// Function to show autocomplete suggestions
function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    if (value) {
        const regex = new RegExp(value, 'i');
        const filteredFlowers = flowers.filter(flower => regex.test(flower));

        filteredFlowers.forEach(flower => {
            const div = document.createElement('div');
            div.textContent = flower;
            div.onclick = function() {
                document.getElementById('search-input').value = flower;
                suggestionsBox.innerHTML = '';
                searchFlowers();
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
function searchFlowers() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.flower-item'); // Ensure your HTML uses .flower-item for flowers

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
