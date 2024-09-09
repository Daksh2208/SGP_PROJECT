// Replace with your own API key
const apiKey = '0b45eb6d5cf2b0f7bc9348639969d3cf';
const city = 'Godhra'; // Or dynamically set the city based on user input

// OpenWeatherMap API URL
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch weather data
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        // Extract necessary information
        const location = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Update the HTML with weather data
        document.getElementById('location').textContent = `Location: ${location}`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
        document.getElementById('description').textContent = `Condition: ${description}`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
