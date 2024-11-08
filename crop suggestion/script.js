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
    if (area === 'Hilly') {
        // Sandy soil, various pH levels, rainfall, and seasons
        if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Millet', 'Quinoa', 'Amaranth');
            vegetables.push('Beets', 'Turnips', 'Parsnips');
            fruits.push('Cranberries', 'Lingonberries', 'Hawthorn Berries');
        }
        if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Barley', 'Buckwheat', 'Foxtail Millet');
            vegetables.push('Kale', 'Leeks', 'Parsnips');
            fruits.push('Apples', 'Blackcurrants', 'Mulberries');
        }
        if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Wheat', 'Rye', 'Triticale');
            vegetables.push('Cabbage', 'Kale', 'Brussels Sprouts');
            fruits.push('Apples', 'Pears', 'Plums');
        }
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Barley', 'Millet', 'Buckwheat');
            vegetables.push('Kale', 'Turnips', 'Beets');
            fruits.push('Apples', 'Pears', 'Plums');
        }
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Millet', 'Barley', 'Sorghum');
            vegetables.push('Zucchini', 'Green Beans', 'Squash');
            fruits.push('Figs', 'Grapes', 'Melons');
        }
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Monsoon') {
            crops.push('Maize', 'Sorghum', 'Foxtail Millet');
            vegetables.push('Okra', 'Green Beans', 'Cucumbers');
            fruits.push('Passionfruit', 'Lychees', 'Guavas');
        }
        
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Foxtail Millet', 'Pearl Millet', 'Chickpeas');
            vegetables.push('Garlic', 'Radishes', 'Beets');
            fruits.push('Oranges', 'Grapes', 'Pineapples');
        }
        if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Soybeans', 'Wheat', 'Barley');
            vegetables.push('Onions', 'Cabbage', 'Lettuce');
            fruits.push('Grapes', 'Strawberries', 'Apples');
        }
        if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Spring') {
            crops.push('Quinoa', 'Sorghum', 'Buckwheat');
            vegetables.push('Carrots', 'Spinach', 'Kale');
            fruits.push('Blueberries', 'Raspberries', 'Cranberries');
        }
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Amaranth', 'Teff', 'Spelt');
            vegetables.push('Parsnips', 'Kale', 'Chard');
            fruits.push('Pine Nuts', 'Almonds', 'Pistachios');
        }
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Foxtail Millet', 'Finger Millet', 'Teff');
            vegetables.push('Kale', 'Mustard Greens', 'Chard');
            fruits.push('Quinces', 'Apples', 'Pears');
        }
        if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Barley', 'Sorghum', 'Millet');
            vegetables.push('Pumpkins', 'Sweet Corn', 'Collard Greens');
            fruits.push('Grapes', 'Apples', 'Peaches');
        }
        if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Summer') {
            crops.push('Millet', 'Foxtail', 'Sorghum');
            vegetables.push('Pumpkins', 'Okra', 'Corn');
            fruits.push('Peaches', 'Plums', 'Mulberries');
        }
        if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Monsoon') {
            crops.push('Rice', 'Maize', 'Finger Millet');
            vegetables.push('Okra', 'Bitter Gourd', 'Pumpkin');
            fruits.push('Bananas', 'Pineapples', 'Lychees');
        }
        if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Monsoon') {
            crops.push('Finger Millet', 'Foxtail Millet', 'Buckwheat');
            vegetables.push('Okra', 'Bottle Gourd', 'Green Beans');
            fruits.push('Bananas', 'Papayas', 'Lychees');
        }
        if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Quinoa', 'Amaranth', 'Oats');
            vegetables.push('Beets', 'Eggplants', 'Zucchini');
            fruits.push('Cherries', 'Blackberries', 'Raspberries');
        }
        if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Autumn') {
            // Adding specific crops, vegetables, and fruits for this condition
            crops.push('Buckwheat', 'Amaranth', 'Rye');
            vegetables.push('Kale', 'Brussels Sprouts', 'Sweet Potatoes');
            fruits.push('Cranberries', 'Gooseberries', 'Blackberries');
        }
        if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Buckwheat', 'Rye', 'Millet');
            vegetables.push('Kale', 'Turnips', 'Collard Greens');
            fruits.push('Cranberries', 'Gooseberries', 'Elderberries');
        }
        if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Quinoa', 'Amaranth', 'Oats');
            vegetables.push('Beets', 'Eggplants', 'Zucchini');
            fruits.push('Cherries', 'Blackberries', 'Raspberries');}
            if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Monsoon') {
                console.log('Combination not possible');
            }
            if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Winter') {
                // This combination does not exist in the current conditions
                console.log('Combination not possible in Hilly areas.');
            }
            if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Summer') {
                // Since this combination does not exist, nothing happens
                // You can leave this block empty or add a message indicating the combination is not available
                console.log('This combination is not possible for hilly areas.');
            }
            if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Monsoon') {
                // This combination is not present in the original conditions
                // So, this would not execute anything in the current structure
                console.log('Combination not found in existing conditions');
            }
            if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Autumn') {
                crops.push('Wheat', 'Barley', 'Oats');
                vegetables.push('Carrots', 'Leeks', 'Turnips');
                fruits.push('Pears', 'Plums', 'Grapes');
            }
            
            if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Winter') {
                console.log('Combination not possible for Clay, Alkaline, Medium Rainfall, Winter.');
            }
            if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Monsoon') {
                crops.push('Millets', 'Lentils', 'Chickpeas');
                vegetables.push('Tomatoes', 'Potatoes', 'Green Beans');
                fruits.push('Bananas', 'Mangoes', 'Papayas');
            }
            if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Summer') {
                crops.push('Soybeans', 'Corn', 'Sunflower');
                vegetables.push('Tomatoes', 'Peppers', 'Eggplant');
                fruits.push('Peaches', 'Apricots', 'Plums');
            }    
        // Clay soil, different pH, rainfall, and seasons
        if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Rye', 'Triticale', 'Barley');
            vegetables.push('Brussels Sprouts', 'Leeks', 'Spinach');
            fruits.push('Pears', 'Plums', 'Quince');
        }
        if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Wheat', 'Rice', 'Canola');
            vegetables.push('Broccoli', 'Cauliflower', 'Sweet Corn');
            fruits.push('Apples', 'Cherries', 'Grapes');
        }
    
        // Loamy soil, various pH levels, rainfall, and seasons
        if (soilType === 'Loamy' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Winter') {
            crops.push('Amaranth', 'Quinoa', 'Millet');
            vegetables.push('Beets', 'Swiss Chard', 'Turnips');
            fruits.push('Strawberries', 'Blackberries', 'Blueberries');
        }
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Lentils', 'Chickpeas', 'Soybeans');
            vegetables.push('Carrots', 'Kale', 'Zucchini');
            fruits.push('Oranges', 'Lemons', 'Pineapples');
        }
    
        // Silty soil, various pH levels, rainfall, and seasons
        if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Corn', 'Barley', 'Millet');
            vegetables.push('Peppers', 'Okra', 'Cucumber');
            fruits.push('Watermelons', 'Papayas', 'Peaches');
        }
        if (soilType === 'Silty' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Rice', 'Wheat', 'Oats');
            vegetables.push('Cabbage', 'Broccoli', 'Cauliflower');
            fruits.push('Oranges', 'Figs', 'Nectarines');
        }
        if (soilType === 'Silty' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Winter') {
            crops.push('Taro', 'Cassava', 'Yam');
            vegetables.push('Sweet Potatoes', 'Green Beans', 'Pumpkins');
            fruits.push('Pineapples', 'Mangos', 'Guavas');
        }
    
        // Peaty soil, various pH levels, rainfall, and seasons
        if (soilType === 'Peaty' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Sorghum', 'Millet', 'Barley');
            vegetables.push('Radishes', 'Turnips', 'Spinach');
            fruits.push('Pears', 'Strawberries', 'Gooseberries');
        }
        if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Oats', 'Buckwheat', 'Barley');
            vegetables.push('Cabbage', 'Leeks', 'Parsnips');
            fruits.push('Apples', 'Blueberries', 'Cranberries');
        }
    
        // Various other soil, pH, rainfall, and seasonal combinations
        if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Spring') {
            crops.push('Corn', 'Rice', 'Peas');
            vegetables.push('Lettuce', 'Celery', 'Onions');
            fruits.push('Pineapples', 'Papayas', 'Passionfruit');
        }
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Wheat', 'Barley', 'Triticale');
            vegetables.push('Turnips', 'Cabbage', 'Spinach');
            fruits.push('Kiwis', 'Apples', 'Plums');
        }
        if (soilType === 'Silty' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Millet', 'Amaranth', 'Sorghum');
            vegetables.push('Peas', 'Asparagus', 'Lettuce');
            fruits.push('Cherries', 'Peaches', 'Pomegranates');
        }
        if (soilType === 'Peaty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Rice', 'Buckwheat', 'Chickpeas');
            vegetables.push('Collard Greens', 'Radishes', 'Green Beans');
            fruits.push('Oranges', 'Cranberries', 'Grapes');
        }
    
        // Expanding to different soil types, pH, and conditions
        if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Quinoa', 'Lentils', 'Oats');
            vegetables.push('Cauliflower', 'Brussels Sprouts', 'Kale');
            fruits.push('Apples', 'Nectarines', 'Pears');
        }
        if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Sorghum', 'Rice', 'Barley');
            vegetables.push('Turnips', 'Lettuce', 'Radishes');
            fruits.push('Grapes', 'Oranges', 'Melons');
        }
        if (soilType === 'Loamy' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Amaranth', 'Triticale', 'Millet');
            vegetables.push('Beets', 'Squash', 'Spinach');
            fruits.push('Lemons', 'Pineapples', 'Bananas');
        }
        if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Corn', 'Wheat', 'Rice');
            vegetables.push('Peppers', 'Cucumbers', 'Eggplants');
            fruits.push('Mangos', 'Papayas', 'Oranges');
        }
        if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Rice', 'Chickpeas', 'Peanuts');
            vegetables.push('Collard Greens', 'Swiss Chard', 'Lettuce');
            fruits.push('Strawberries', 'Blueberries', 'Raspberries');
        }
    
    
        // Additional combinations for Hilly areas
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Wheat', 'Barley', 'Oats');
            vegetables.push('Garlic', 'Onions', 'Beets');
            fruits.push('Apples', 'Pears', 'Grapes');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Triticale', 'Sorghum', 'Soybeans');
            vegetables.push('Carrots', 'Radishes', 'Cauliflower');
            fruits.push('Cherries', 'Peaches', 'Melons');
        } else if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Rye', 'Triticale', 'Oats');
            vegetables.push('Lettuce', 'Spinach', 'Kale');
            fruits.push('Figs', 'Blackberries', 'Blueberries');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Cotton', 'Peanuts', 'Sorghum');
            vegetables.push('Peas', 'Beans', 'Corn');
            fruits.push('Grapefruit', 'Mangoes', 'Kiwis');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Chickpeas', 'Pulses', 'Barley');
            vegetables.push('Garlic', 'Onions', 'Leeks');
            fruits.push('Pears', 'Plums', 'Peaches');
        } else if (soilType === 'Silty' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Flax', 'Oats', 'Sunflower');
            vegetables.push('Artichokes', 'Swiss Chard', 'Zucchini');
            fruits.push('Mangoes', 'Guavas', 'Coconuts');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Amaranth', 'Sorghum', 'Millets');
            vegetables.push('Asparagus', 'Kale', 'Spinach');
            fruits.push('Cherries', 'Apples', 'Plums');
        } else if (soilType === 'Peaty' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Potatoes', 'Yams', 'Taro');
            vegetables.push('Turnips', 'Swiss Chard', 'Pumpkins');
            fruits.push('Figs', 'Persimmons', 'Pomegranates');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Wheat', 'Barley', 'Oats');
            vegetables.push('Carrots', 'Garlic', 'Radishes');
            fruits.push('Strawberries', 'Blueberries', 'Grapes');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Spring') {
            crops.push('Sorghum', 'Lentils', 'Chickpeas');
            vegetables.push('Garlic', 'Spinach', 'Carrots');
            fruits.push('Peaches', 'Nectarines', 'Apricots');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Quinoa', 'Barley', 'Millet');
            vegetables.push('Kale', 'Chard', 'Onions');
            fruits.push('Apples', 'Pears', 'Cherries');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Triticale', 'Wheat', 'Oats');
            vegetables.push('Radishes', 'Peas', 'Cabbage');
            fruits.push('Plums', 'Cherries', 'Peaches');
        } else if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Corn', 'Soybeans', 'Peanuts');
            vegetables.push('Tomatoes', 'Lettuce', 'Bell Peppers');
            fruits.push('Watermelons', 'Honeydew', 'Cantaloupe');
        } else if (soilType === 'Loamy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Spring') {
            crops.push('Safflower', 'Sesame', 'Sunflower');
            vegetables.push('Asparagus', 'Beets', 'Zucchini');
            fruits.push('Pomegranates', 'Apricots', 'Figs');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Potatoes', 'Turnips', 'Yams');
            vegetables.push('Spinach', 'Kale', 'Swiss Chard');
            fruits.push('Apples', 'Blackberries', 'Gooseberries');
        } else if (soilType === 'Peaty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Cassava', 'Taro', 'Yam');
            vegetables.push('Pumpkins', 'Radishes', 'Green Beans');
            fruits.push('Guavas', 'Limes', 'Mangos');
        }
    }

if(area === 'Coastal') {
        // Grouping possible combinations for coastal areas
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Winter') {
            crops.push('Coconut', 'Sugarcane', 'Pineapple');
            vegetables.push('Seaweed', 'Cabbage', 'Cauliflower');
            fruits.push('Mango', 'Papaya', 'Guava');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Taro', 'Sweet Potatoes', 'Cassava');
            vegetables.push('Asparagus', 'Lettuce', 'Tomatoes');
            fruits.push('Banana', 'Passion Fruit', 'Citrus');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Sesame', 'Millet', 'Cowpeas');
            vegetables.push('Chard', 'Spinach', 'Eggplant');
            fruits.push('Lime', 'Kiwifruit', 'Nectarines');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Rice', 'Barley', 'Wheat');
            vegetables.push('Kale', 'Broccoli', 'Radishes');
            fruits.push('Figs', 'Dates', 'Mulberries');
        } else if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Pulses', 'Chickpeas', 'Lentils');
            vegetables.push('Beets', 'Turnips', 'Onions');
            fruits.push('Blackberries', 'Raspberries', 'Plums');
        } else if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Cotton', 'Sorghum', 'Peanuts');
            vegetables.push('Carrots', 'Beans', 'Cucumbers');
            fruits.push('Watermelon', 'Honeydew', 'Strawberries');
        } else if (soilType === 'Loamy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Soybeans', 'Sunflower', 'Triticale');
            vegetables.push('Bell Peppers', 'Pumpkins', 'Squash');
            fruits.push('Pomegranates', 'Apricots', 'Cherries');
        } else if (soilType === 'Silty' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Flax', 'Oats', 'Triticale');
            vegetables.push('Radishes', 'Kohlrabi', 'Swiss Chard');
            fruits.push('Coconuts', 'Lemons', 'Persimmons');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Corn', 'Rye', 'Barley');
            vegetables.push('Spinach', 'Lettuce', 'Garlic');
            fruits.push('Apples', 'Figs', 'Peaches');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Potatoes', 'Taro', 'Yams');
            vegetables.push('Artichokes', 'Radishes', 'Onions');
            fruits.push('Guavas', 'Mangos', 'Strawberries');
        } else if (soilType === 'Peaty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Rice', 'Quinoa', 'Millet');
            vegetables.push('Zucchini', 'Beans', 'Kale');
            fruits.push('Citrus', 'Watermelons', 'Blackberries');
        }
    
        // Additional combinations for Coastal areas
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Wheat', 'Oats', 'Barley');
            vegetables.push('Garlic', 'Onions', 'Beets');
            fruits.push('Apples', 'Peaches', 'Grapes');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Triticale', 'Soybeans', 'Corn');
            vegetables.push('Radishes', 'Spinach', 'Kale');
            fruits.push('Cherries', 'Plums', 'Pears');
        } else if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Pulses', 'Rice', 'Chickpeas');
            vegetables.push('Cabbage', 'Broccoli', 'Cauliflower');
            fruits.push('Blackberries', 'Raspberries', 'Figs');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Cotton', 'Coconut', 'Sugarcane');
            vegetables.push('Peas', 'Beans', 'Bell Peppers');
            fruits.push('Mangoes', 'Papayas', 'Guavas');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Sweet Potatoes', 'Taro', 'Cassava');
            vegetables.push('Carrots', 'Spinach', 'Chard');
            fruits.push('Pears', 'Plums', 'Peaches');
        } else if (soilType === 'Silty' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Flax', 'Barley', 'Sorghum');
            vegetables.push('Zucchini', 'Lettuce', 'Radishes');
            fruits.push('Guavas', 'Limes', 'Kiwis');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Rice', 'Millet', 'Quinoa');
            vegetables.push('Pumpkins', 'Squash', 'Tomatoes');
            fruits.push('Watermelons', 'Strawberries', 'Honeydew');
        } else if (soilType === 'Peaty' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Potatoes', 'Sweet Potatoes', 'Yams');
            vegetables.push('Kale', 'Carrots', 'Radishes');
            fruits.push('Figs', 'Mangoes', 'Persimmons');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Corn', 'Soybeans', 'Peanuts');
            vegetables.push('Onions', 'Spinach', 'Kale');
            fruits.push('Blackberries', 'Raspberries', 'Blueberries');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Spring') {
            crops.push('Coconut', 'Sugarcane', 'Pineapple');
            vegetables.push('Cabbage', 'Tomatoes', 'Beans');
            fruits.push('Bananas', 'Passion Fruit', 'Citrus');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Sesame', 'Chickpeas', 'Lentils');
            vegetables.push('Spinach', 'Chard', 'Eggplant');
            fruits.push('Lime', 'Kiwifruit', 'Nectarines');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Triticale', 'Wheat', 'Rice');
            vegetables.push('Radishes', 'Kale', 'Broccoli');
            fruits.push('Figs', 'Peaches', 'Plums');
        } else if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Cotton', 'Corn', 'Barley');
            vegetables.push('Cucumbers', 'Pumpkins', 'Beans');
            fruits.push('Watermelons', 'Honeydew', 'Strawberries');
        } else if (soilType === 'Loamy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Spring') {
            crops.push('Soybeans', 'Sunflower', 'Triticale');
            vegetables.push('Bell Peppers', 'Zucchini', 'Squash');
            fruits.push('Pomegranates', 'Cherries', 'Apples');
        }
    }
    
    






    if (area === 'Plain') {
        // Grouping possible combinations for plain areas
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Winter') {
            crops.push('Wheat', 'Sorghum', 'Barley');
            vegetables.push('Carrots', 'Peas', 'Lettuce');
            fruits.push('Apples', 'Pears', 'Cherries');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Rice', 'Millet', 'Triticale');
            vegetables.push('Spinach', 'Radishes', 'Onions');
            fruits.push('Mango', 'Papaya', 'Guava');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Sesame', 'Pulses', 'Chickpeas');
            vegetables.push('Beans', 'Zucchini', 'Tomatoes');
            fruits.push('Citrus', 'Kiwifruit', 'Nectarines');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Cotton', 'Corn', 'Soybeans');
            vegetables.push('Cabbage', 'Broccoli', 'Kale');
            fruits.push('Blackberries', 'Raspberries', 'Figs');
        } else if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Oats', 'Chickpeas', 'Lentils');
            vegetables.push('Kohlrabi', 'Cauliflower', 'Turnips');
            fruits.push('Plums', 'Dates', 'Persimmons');
        } else if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Peanuts', 'Sunflower', 'Triticale');
            vegetables.push('Pumpkins', 'Squash', 'Bell Peppers');
            fruits.push('Watermelon', 'Strawberries', 'Honeydew');
        } else if (soilType === 'Loamy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Barley', 'Sorghum', 'Corn');
            vegetables.push('Eggplant', 'Zucchini', 'Carrots');
            fruits.push('Pomegranates', 'Cherries', 'Cantaloupe');
        } else if (soilType === 'Silty' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Flax', 'Rye', 'Quinoa');
            vegetables.push('Lettuce', 'Radishes', 'Beets');
            fruits.push('Guavas', 'Figs', 'Plums');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Oats', 'Rice', 'Wheat');
            vegetables.push('Spinach', 'Garlic', 'Onions');
            fruits.push('Apples', 'Peaches', 'Berries');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Potatoes', 'Sweet Potatoes', 'Yams');
            vegetables.push('Chard', 'Turnips', 'Kale');
            fruits.push('Mangoes', 'Strawberries', 'Papayas');
        } else if (soilType === 'Peaty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Corn', 'Quinoa', 'Rice');
            vegetables.push('Zucchini', 'Peas', 'Beans');
            fruits.push('Melons', 'Citrus', 'Figs');
        } else if (soilType === 'Chalky' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Barley', 'Wheat', 'Sorghum');
            vegetables.push('Radishes', 'Carrots', 'Spinach');
            fruits.push('Pears', 'Apples', 'Plums');
        } else if (soilType === 'Chalky' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Corn', 'Sunflower', 'Triticale');
            vegetables.push('Onions', 'Kale', 'Broccoli');
            fruits.push('Peaches', 'Nectarines', 'Cherries');
        } else if (soilType === 'Chalky' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Summer') {
            crops.push('Cotton', 'Rice', 'Chickpeas');
            vegetables.push('Beans', 'Zucchini', 'Tomatoes');
            fruits.push('Mango', 'Papaya', 'Guava');
        } else if (soilType === 'Chalky' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Oats', 'Millet', 'Lentils');
            vegetables.push('Turnips', 'Pumpkins', 'Garlic');
            fruits.push('Blackberries', 'Raspberries', 'Figs');
        }
    
        // Additional combinations for Plain areas
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Wheat', 'Oats', 'Barley');
            vegetables.push('Garlic', 'Onions', 'Beets');
            fruits.push('Apples', 'Peaches', 'Grapes');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Triticale', 'Soybeans', 'Corn');
            vegetables.push('Radishes', 'Spinach', 'Kale');
            fruits.push('Cherries', 'Plums', 'Pears');
        } else if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Pulses', 'Rice', 'Chickpeas');
            vegetables.push('Cabbage', 'Broccoli', 'Cauliflower');
            fruits.push('Blackberries', 'Raspberries', 'Figs');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Cotton', 'Coconut', 'Sugarcane');
            vegetables.push('Peas', 'Beans', 'Bell Peppers');
            fruits.push('Mangoes', 'Papayas', 'Guavas');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Sweet Potatoes', 'Taro', 'Cassava');
            vegetables.push('Carrots', 'Spinach', 'Chard');
            fruits.push('Pears', 'Plums', 'Peaches');
        } else if (soilType === 'Silty' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Flax', 'Barley', 'Sorghum');
            vegetables.push('Zucchini', 'Lettuce', 'Radishes');
            fruits.push('Guavas', 'Limes', 'Kiwis');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Rice', 'Millet', 'Quinoa');
            vegetables.push('Pumpkins', 'Squash', 'Tomatoes');
            fruits.push('Watermelons', 'Strawberries', 'Honeydew');
        } else if (soilType === 'Peaty' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Potatoes', 'Sweet Potatoes', 'Yams');
            vegetables.push('Kale', 'Carrots', 'Radishes');
            fruits.push('Figs', 'Mangoes', 'Persimmons');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Corn', 'Soybeans', 'Peanuts');
            vegetables.push('Onions', 'Spinach', 'Kale');
            fruits.push('Blackberries', 'Raspberries', 'Blueberries');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Spring') {
            crops.push('Coconut', 'Sugarcane', 'Pineapple');
            vegetables.push('Lettuce', 'Bell Peppers', 'Carrots');
            fruits.push('Oranges', 'Lemons', 'Limes');
        }
    
        // Additional random combinations can be generated similarly
        vegetables.push('Bell Peppers', 'Zucchini', 'Squash');
        fruits.push('Pomegranates', 'Cherries', 'Apples');
    }

    if (area === 'Arid') {
        // Grouping possible combinations for arid areas
        if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Barley', 'Sorghum', 'Millet');
            vegetables.push('Cactus', 'Chard', 'Beets');
            fruits.push('Dates', 'Figs', 'Olives');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Wheat', 'Oats', 'Corn');
            vegetables.push('Bell Peppers', 'Eggplant', 'Tomatoes');
            fruits.push('Mangoes', 'Citrus', 'Pomegranates');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Summer') {
            crops.push('Cotton', 'Sesame', 'Chickpeas');
            vegetables.push('Spinach', 'Lettuce', 'Radishes');
            fruits.push('Papayas', 'Watermelons', 'Guavas');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Sorghum', 'Millet', 'Oats');
            vegetables.push('Kale', 'Broccoli', 'Carrots');
            fruits.push('Figs', 'Plums', 'Peaches');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Chickpeas', 'Lentils', 'Cotton');
            vegetables.push('Beets', 'Garlic', 'Onions');
            fruits.push('Apples', 'Pears', 'Nectarines');
        } else if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Peanuts', 'Sunflower', 'Quinoa');
            vegetables.push('Zucchini', 'Squash', 'Pumpkins');
            fruits.push('Cantaloupe', 'Strawberries', 'Kiwis');
        } else if (soilType === 'Loamy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Maize', 'Sorghum', 'Rice');
            vegetables.push('Radishes', 'Turnips', 'Lettuce');
            fruits.push('Melons', 'Blackberries', 'Raspberries');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Cotton', 'Wheat', 'Barley');
            vegetables.push('Spinach', 'Garlic', 'Kale');
            fruits.push('Peaches', 'Plums', 'Apricots');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Potatoes', 'Sweet Potatoes', 'Yams');
            vegetables.push('Carrots', 'Chard', 'Radishes');
            fruits.push('Blackberries', 'Guavas', 'Figs');
        } else if (soilType === 'Chalky' && soilPh === 'Alkaline' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Oats', 'Sorghum', 'Millet');
            vegetables.push('Onions', 'Garlic', 'Turnips');
            fruits.push('Pears', 'Dates', 'Apples');
        } else if (soilType === 'Chalky' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Chickpeas', 'Wheat', 'Barley');
            vegetables.push('Spinach', 'Radishes', 'Kale');
            fruits.push('Figs', 'Grapes', 'Pomegranates');
        } else if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Rice', 'Millet', 'Sorghum');
            vegetables.push('Broccoli', 'Cauliflower', 'Cabbage');
            fruits.push('Nectarines', 'Plums', 'Peaches');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Cotton', 'Chickpeas', 'Sesame');
            vegetables.push('Spinach', 'Radishes', 'Peas');
            fruits.push('Citrus', 'Apples', 'Cherries');
        }
    
        // Additional combinations for Arid areas
        if (soilType === 'Loamy' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Wheat', 'Barley', 'Chickpeas');
            vegetables.push('Garlic', 'Onions', 'Kale');
            fruits.push('Apples', 'Peaches', 'Grapes');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Spring') {
            crops.push('Corn', 'Sunflower', 'Rice');
            vegetables.push('Bell Peppers', 'Zucchini', 'Spinach');
            fruits.push('Mangoes', 'Pineapples', 'Guavas');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Sorghum', 'Millet', 'Barley');
            vegetables.push('Carrots', 'Tomatoes', 'Cabbage');
            fruits.push('Blackberries', 'Raspberries', 'Figs');
        } else if (soilType === 'Peaty' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Potatoes', 'Sweet Potatoes', 'Quinoa');
            vegetables.push('Kale', 'Beets', 'Lettuce');
            fruits.push('Figs', 'Citrus', 'Mangoes');
        } else if (soilType === 'Chalky' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Wheat', 'Rice', 'Cotton');
            vegetables.push('Pumpkins', 'Turnips', 'Beets');
            fruits.push('Pears', 'Peaches', 'Nectarines');
        } else if (soilType === 'Silty' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Summer') {
            crops.push('Millet', 'Sorghum', 'Chickpeas');
            vegetables.push('Radishes', 'Carrots', 'Garlic');
            fruits.push('Pomegranates', 'Figs', 'Grapes');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Barley', 'Oats', 'Millet');
            vegetables.push('Kale', 'Broccoli', 'Spinach');
            fruits.push('Blackberries', 'Blueberries', 'Raspberries');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Wheat', 'Corn', 'Peanuts');
            vegetables.push('Cabbage', 'Onions', 'Zucchini');
            fruits.push('Pears', 'Dates', 'Plums');
        }
    
        // Additional random combinations can be generated similarly
        vegetables.push('Bell Peppers', 'Zucchini', 'Squash');
        fruits.push('Pomegranates', 'Cherries', 'Apples');
    }

    if (area === 'Tropical') {
        // Existing combinations
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Rice', 'Maize', 'Cassava');
            vegetables.push('Tomatoes', 'Bell Peppers', 'Eggplants');
            fruits.push('Mangoes', 'Papayas', 'Pineapples');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Sugarcane', 'Sweet Potatoes', 'Taro');
            vegetables.push('Chard', 'Lettuce', 'Cucumbers');
            fruits.push('Bananas', 'Guavas', 'Passion Fruit');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Sorghum', 'Millet', 'Cassava');
            vegetables.push('Carrots', 'Radishes', 'Garlic');
            fruits.push('Pomegranates', 'Figs', 'Dates');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Rice', 'Tropical Grains', 'Quinoa');
            vegetables.push('Spinach', 'Kale', 'Swiss Chard');
            fruits.push('Mangoes', 'Lychee', 'Rambutan');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Sugarcane', 'Rice', 'Taro');
            vegetables.push('Broccoli', 'Beets', 'Carrots');
            fruits.push('Starfruit', 'Durian', 'Longan');
        } else if (soilType === 'Chalky' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Millet', 'Chickpeas', 'Soybeans');
            vegetables.push('Pumpkins', 'Squash', 'Zucchini');
            fruits.push('Watermelon', 'Cantaloupe', 'Papaya');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Sweet Potatoes', 'Rice', 'Cassava');
            vegetables.push('Bell Peppers', 'Tomatoes', 'Eggplants');
            fruits.push('Pineapples', 'Bananas', 'Mangoes');
        } else if (soilType === 'Loamy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Corn', 'Sorghum', 'Cassava');
            vegetables.push('Lettuce', 'Cucumbers', 'Radishes');
            fruits.push('Guavas', 'Passion Fruit', 'Citrus');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Rice', 'Sugarcane', 'Taro');
            vegetables.push('Spinach', 'Kale', 'Carrots');
            fruits.push('Mangoes', 'Papayas', 'Avocados');
        } else if (soilType === 'Silty' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Millet', 'Sorghum', 'Corn');
            vegetables.push('Tomatoes', 'Squash', 'Bell Peppers');
            fruits.push('Pineapples', 'Passion Fruit', 'Bananas');
        }
    
        // Additional combinations
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Taro', 'Rice', 'Yams');
            vegetables.push('Kale', 'Spinach', 'Cabbage');
            fruits.push('Dragon Fruit', 'Pineapples', 'Lychee');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Sugarcane', 'Soybeans', 'Cassava');
            vegetables.push('Zucchini', 'Radishes', 'Cucumbers');
            fruits.push('Mangoes', 'Guavas', 'Citrus');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Corn', 'Millet', 'Sorghum');
            vegetables.push('Broccoli', 'Onions', 'Carrots');
            fruits.push('Pomegranates', 'Figs', 'Peaches');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Rice', 'Tropical Grains', 'Sweet Potatoes');
            vegetables.push('Spinach', 'Swiss Chard', 'Tomatoes');
            fruits.push('Mangoes', 'Papayas', 'Coconut');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Taro', 'Sugarcane', 'Rice');
            vegetables.push('Carrots', 'Beets', 'Garlic');
            fruits.push('Durian', 'Starfruit', 'Rambutan');
        } else if (soilType === 'Chalky' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Millet', 'Sorghum', 'Rice');
            vegetables.push('Pumpkins', 'Kale', 'Radishes');
            fruits.push('Watermelon', 'Cantaloupe', 'Papaya');
        }
    
        // New combinations
        if (soilType === 'Loamy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Pigeon Peas', 'Black-eyed Peas', 'Chickpeas');
            vegetables.push('Chayote', 'Beetroot', 'Mustard Greens');
            fruits.push('Mangoes', 'Papayas', 'Tamarind');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Sorghum', 'Sunflower', 'Corn');
            vegetables.push('Arugula', 'Turnips', 'Radishes');
            fruits.push('Citrus', 'Dragon Fruit', 'Lychee');
        } else if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Paddy', 'Sugarcane', 'Taro');
            vegetables.push('Cauliflower', 'Kohlrabi', 'Celery');
            fruits.push('Coconut', 'Mango', 'Sapodilla');
        } else if (soilType === 'Silty' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Teff', 'Quinoa', 'Sorghum');
            vegetables.push('Cabbage', 'Collard Greens', 'Fennel');
            fruits.push('Guava', 'Jackfruit', 'Persimmon');
        } else if (soilType === 'Peaty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Rice', 'Cassava', 'Sweet Potatoes');
            vegetables.push('Pumpkins', 'Okra', 'Eggplants');
            fruits.push('Papaya', 'Durian', 'Mango');
        } else if (soilType === 'Chalky' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Sorghum', 'Millet', 'Taro');
            vegetables.push('Chard', 'Radishes', 'Cabbage');
            fruits.push('Avocados', 'Figs', 'Passion Fruit');
        }
    
        // More variations
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Amaranth', 'Moringa', 'Pigeon Peas');
            vegetables.push('Chinese Broccoli', 'Spinach', 'Peppers');
            fruits.push('Coconut', 'Mango', 'Papaya');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Spring') {
            crops.push('Pineapple', 'Sugarcane', 'Sweet Potatoes');
            vegetables.push('Zucchini', 'Chard', 'Pumpkin');
            fruits.push('Mangoes', 'Papayas', 'Bananas');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Rice', 'Millet', 'Sorghum');
            vegetables.push('Carrots', 'Turnips', 'Kale');
            fruits.push('Guavas', 'Dragon Fruit', 'Tamarind');
        } else if (soilType === 'Silty' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Winter') {
            crops.push('Yams', 'Cassava', 'Taro');
            vegetables.push('Collard Greens', 'Kohlrabi', 'Carrots');
            fruits.push('Pineapples', 'Mangoes', 'Lychee');
        } else if (soilType === 'Peaty' && soilPh === 'Neutral' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Sugarcane', 'Sweet Potatoes', 'Rice');
            vegetables.push('Radishes', 'Spinach', 'Cabbage');
            fruits.push('Passion Fruit', 'Papaya', 'Durian');
        } else if (soilType === 'Chalky' && soilPh === 'Acidic' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Millet', 'Sorghum', 'Paddy');
            vegetables.push('Pumpkins', 'Squash', 'Eggplants');
            fruits.push('Pomegranates', 'Figs', 'Dates');
        }
    }

    if (area === 'Temperate') {
        // Existing combinations
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Wheat', 'Barley', 'Oats');
            vegetables.push('Carrots', 'Broccoli', 'Spinach');
            fruits.push('Apples', 'Pears', 'Cherries');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Corn', 'Potatoes', 'Soybeans');
            vegetables.push('Lettuce', 'Cucumbers', 'Radishes');
            fruits.push('Peaches', 'Plums', 'Raspberries');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Rye', 'Triticale', 'Sorghum');
            vegetables.push('Kale', 'Cabbage', 'Beets');
            fruits.push('Blackberries', 'Figs', 'Grapes');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Oats', 'Winter Wheat', 'Barley');
            vegetables.push('Garlic', 'Onions', 'Swiss Chard');
            fruits.push('Cranberries', 'Blueberries', 'Kiwi');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Buckwheat', 'Quinoa', 'Rye');
            vegetables.push('Radishes', 'Spinach', 'Turnips');
            fruits.push('Gooseberries', 'Huckleberries', 'Mulberries');
        } else if (soilType === 'Chalky' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Chickpeas', 'Lentils', 'Alfalfa');
            vegetables.push('Celery', 'Bell Peppers', 'Tomatoes');
            fruits.push('Strawberries', 'Raspberries', 'Citrus');
        } else if (soilType === 'Sandy' && soilPh === 'Alkaline' && rainfall === 'High' && season === 'Autumn') {
            crops.push('Quinoa', 'Amaranth', 'Corn');
            vegetables.push('Zucchini', 'Eggplants', 'Peas');
            fruits.push('Peaches', 'Plums', 'Apples');
        } else if (soilType === 'Loamy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Barley', 'Oats', 'Wheat');
            vegetables.push('Carrots', 'Beets', 'Potatoes');
            fruits.push('Pears', 'Cherries', 'Cranberries');
        } else if (soilType === 'Clay' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Wheat', 'Rye', 'Barley');
            vegetables.push('Kale', 'Spinach', 'Garlic');
            fruits.push('Blackberries', 'Cherries', 'Apples');
        } else if (soilType === 'Silty' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Summer') {
            crops.push('Corn', 'Beans', 'Soybeans');
            vegetables.push('Radishes', 'Peas', 'Cucumbers');
            fruits.push('Grapes', 'Figs', 'Blackberries');
        }
    
        // Additional combinations
        if (soilType === 'Loamy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Barley', 'Wheat', 'Corn');
            vegetables.push('Zucchini', 'Tomatoes', 'Bell Peppers');
            fruits.push('Peaches', 'Apples', 'Cherries');
        } else if (soilType === 'Sandy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Oats', 'Rye', 'Sorghum');
            vegetables.push('Carrots', 'Lettuce', 'Spinach');
            fruits.push('Blueberries', 'Raspberries', 'Plums');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Winter') {
            crops.push('Triticale', 'Barley', 'Winter Wheat');
            vegetables.push('Kale', 'Collard Greens', 'Onions');
            fruits.push('Figs', 'Pomegranates', 'Grapes');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Winter Wheat', 'Oats', 'Buckwheat');
            vegetables.push('Swiss Chard', 'Radishes', 'Kohlrabi');
            fruits.push('Kiwi', 'Gooseberries', 'Cranberries');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Summer') {
            crops.push('Quinoa', 'Buckwheat', 'Rye');
            vegetables.push('Turnips', 'Spinach', 'Radishes');
            fruits.push('Mulberries', 'Huckleberries', 'Blackberries');
        } else if (soilType === 'Chalky' && soilPh === 'Neutral' && rainfall === 'Low' && season === 'Spring') {
            crops.push('Chickpeas', 'Alfalfa', 'Soybeans');
            vegetables.push('Celery', 'Bell Peppers', 'Tomatoes');
            fruits.push('Strawberries', 'Citrus', 'Raspberries');
        }
    
        // New combinations
        if (soilType === 'Loamy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Winter') {
            crops.push('Wheat', 'Oats', 'Barley');
            vegetables.push('Kale', 'Onions', 'Garlic');
            fruits.push('Apples', 'Pears', 'Cherries');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Corn', 'Potatoes', 'Soybeans');
            vegetables.push('Lettuce', 'Radishes', 'Cucumbers');
            fruits.push('Peaches', 'Plums', 'Raspberries');
        } else if (soilType === 'Clay' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Rye', 'Triticale', 'Sorghum');
            vegetables.push('Kale', 'Cabbage', 'Beets');
            fruits.push('Blackberries', 'Figs', 'Grapes');
        } else if (soilType === 'Silty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Spring') {
            crops.push('Oats', 'Winter Wheat', 'Barley');
            vegetables.push('Garlic', 'Onions', 'Swiss Chard');
            fruits.push('Cranberries', 'Blueberries', 'Kiwi');
        } else if (soilType === 'Peaty' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Buckwheat', 'Quinoa', 'Rye');
            vegetables.push('Radishes', 'Spinach', 'Turnips');
            fruits.push('Gooseberries', 'Huckleberries', 'Mulberries');
        } else if (soilType === 'Chalky' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Summer') {
            crops.push('Millet', 'Chickpeas', 'Alfalfa');
            vegetables.push('Celery', 'Tomatoes', 'Bell Peppers');
            fruits.push('Strawberries', 'Citrus', 'Raspberries');
        }
    
        // More variations
        if (soilType === 'Loamy' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Autumn') {
            crops.push('Peas', 'Beans', 'Chickpeas');
            vegetables.push('Turnips', 'Beets', 'Swiss Chard');
            fruits.push('Figs', 'Apples', 'Pomegranates');
        } else if (soilType === 'Sandy' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Barley', 'Oats', 'Wheat');
            vegetables.push('Kale', 'Spinach', 'Garlic');
            fruits.push('Cranberries', 'Blueberries', 'Kiwi');
        } else if (soilType === 'Clay' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Rye', 'Winter Wheat', 'Triticale');
            vegetables.push('Radishes', 'Garlic', 'Kohlrabi');
            fruits.push('Gooseberries', 'Huckleberries', 'Blackberries');
        } else if (soilType === 'Silty' && soilPh === 'Alkaline' && rainfall === 'Low' && season === 'Autumn') {
            crops.push('Sorghum', 'Oats', 'Quinoa');
            vegetables.push('Peas', 'Lettuce', 'Radishes');
            fruits.push('Plums', 'Raspberries', 'Peaches');
        } else if (soilType === 'Peaty' && soilPh === 'Neutral' && rainfall === 'High' && season === 'Winter') {
            crops.push('Buckwheat', 'Soybeans', 'Corn');
            vegetables.push('Spinach', 'Kale', 'Onions');
            fruits.push('Cranberries', 'Figs', 'Grapes');
        } else if (soilType === 'Chalky' && soilPh === 'Acidic' && rainfall === 'Medium' && season === 'Spring') {
            crops.push('Chickpeas', 'Barley', 'Alfalfa');
            vegetables.push('Bell Peppers', 'Tomatoes', 'Zucchini');
            fruits.push('Strawberries', 'Citrus', 'Blackberries');
        }
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
