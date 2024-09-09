const organicFertilizers = [
    "AlfalfaMeal", "Azomite", "Azotobacter", "Banana Peels", "BatGuano", "Biochar",
    "Blood Meal", "Bokashi Bran", "Bone Meal", "Chicken Manure", "Coconut Coir", "Comfrey Tea",
    "Compost", "Corn Gluten", "Cottonseed Meal", "Cow Manure", "Dried Blood", "Eggshell",
    "Feather Meal", "Fish Emulsion", "Fish Hydrolysate", "Fish Meal", "Goat Manure", "Green Manure",
    "Green Sand", "Horse Manure", "Humic Acid", "Kelp Meal", "Leaf Mould", "Liquid Seaweed",
    "Molasses", "Mulch", "Mushroom Compost", "Mustard Cake", "Mycorrhizal Fungi", "Neem Cake",
    "Organic Tea Fertilizer", "Oyster shell Meal", "Peat Moss", "Poultry Pelets", "Rabbit Manure",
    "Rhizobium Inoculants", "Rice Husk Ash", "Rock Phosphate", "Seaweed Extract", "Sheep Manure",
    "Shrimp Meal", "Silage", "Soybean Meal", "Trichoderma", "Vermicompost", "Vinegar solution",
    "Wood Ash", "Worm Castings", "Yarrow Compost"
];

function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';

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

        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
}

function searchFertilizers() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.Organic-Fertilizer-item');

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        article.style.display = title.includes(query) ? 'block' : 'none';
    });

    document.getElementById('suggestions').style.display = 'none';
}

document.addEventListener('click', function(event) {
    if (!document.querySelector('.search-bar').contains(event.target)) {
        document.getElementById('suggestions').style.display = 'none';
    }
});
