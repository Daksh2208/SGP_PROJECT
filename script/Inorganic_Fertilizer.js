const InorganicFertilizers = [
    "Ammonium Nitrate", "Ammonium Polyphosphate", "Ammonium Sulfate", "Ammonium Thiosulfate", "Borax",
    "Boron Fertilizer(Boric Acid)","Calcium Ammonium Nitrate(CAN)", "Calcium Chloride", "Calcium Nitrate", 
    "Copper Hydroxide", "Copper Sulfate", "Diammonium Phosphate(DAP)","Dicalcium Phosphate",
    "Epsom Salt (Magnesium Sulfate)", "Ferrous Sulphate", "Florikan Nutricote", "Foliar NPK Sprays",
    "Hydroponic Nutrients (General)", "Iron Chelate", "Iron Sulfate", "Kno3 (Potassium Nitrate)",
    "Langbeinite", "Limestone (Dolomite Lime)", "Magnesium Chloride", "Magnesium Nitrate",
    "Mono Potassium Phosphate (MKP)", "Monoammonium Phosphate (MAP)", "Muriate of Potash (MOP)",
    "Nitrophosphate Fertilizer", "Osmocote (Slow-release NPK)", "Phosphoric Acid", "Sodium Molybdate",
    "Sodium Nitrate", "Sulfate of Potash (SOP)", "Sulfur Fertilizer", "Sulfur-Coated Urea",
    "Triple Superphosphate (TSP)", "UAN (Urea Ammonium Nitrate Solution)", "Urea", "Vermiculite", 
    "Zeolite", "Zinc Oxide", "Zinc Sulfate Heptahydrate"
];

function showSuggestions(value) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';

    if (value) {
        const regex = new RegExp(value, 'i');
        const filteredFertilizers = InorganicFertilizers.filter(fertilizer => regex.test(fertilizer));

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
    const articles = document.querySelectorAll('.Inorganic-Fertilizer-item');

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
