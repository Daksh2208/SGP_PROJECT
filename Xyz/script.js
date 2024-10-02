// Assuming you have an HTML structure similar to this:
document.getElementById('cropForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user inputs
    const area = document.getElementById('area').value; // e.g., Hilly
    const soilType = document.getElementById('soilType').value; // e.g., Sandy
    const soilPh = document.getElementById('soilPh').value; // e.g., Alkaline
    const rainfall = document.getElementById('rainfall').value; // e.g., High
    const season = document.getElementById('season').value; // e.g., Winter

    // Suggested crops logic
    let crops = [];
    let vegetables = [];
    let fruits = [];

    // Check for the specific case first
    if (area === 'Hilly' && soilType === 'Sandy' && rainfall === 'High' && soilPh === 'Alkaline' && season === 'Winter') {
        crops.push('Sorghum', 'Chickpeas', 'Lentils');
        vegetables.push('Garlic', 'Onions', 'Spinach');
        fruits.push('Apples', 'Pears', 'Plums');
    }

    // You can add more conditions for other combinations here
    // Example for another condition (replace with your actual conditions)
    // if (other conditions) {
    //     crops.push('Other Crop 1', 'Other Crop 2');
    // }

    // Output result
    const resultDiv = document.getElementById('result');
    if (crops.length > 0) {
        resultDiv.innerHTML = `<h2>Suggested Crops:</h2><ul>` + crops.map(crop => `<li>${crop}</li>`).join('') + `</ul>`;
        resultDiv.innerHTML += `<h2>Suggested Vegetables:</h2><ul>` + vegetables.map(veg => `<li>${veg}</li>`).join('') + `</ul>`;
        resultDiv.innerHTML += `<h2>Suggested Fruits:</h2><ul>` + fruits.map(fruit => `<li>${fruit}</li>`).join('') + `</ul>`;
    } else {
        resultDiv.innerHTML = `<h2>No specific crops found for your selection.</h2>`;
    }
});
