// function getWeather() {
//     const apiKey = '9836f62401a246d6acf163745241009';
//     const city = document.getElementById('city').value;

//     if (!city) {
//         alert('Please enter a city');
//         return;
//     }

//     const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//     const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

//     fetch(currentWeatherUrl)
//         .then(response => response.json())
//         .then(data => {
//             displayWeather(data);
//         })
//         .catch(error => {
//             console.error('Error fetching current weather data:', error);
//             alert('Error fetching current weather data. Please try again.');
//         });

//     fetch(forecastUrl)
//         .then(response => response.json())
//         .then(data => {
//             displayHourlyForecast(data.list);
//         })
//         .catch(error => {
//             console.error('Error fetching hourly forecast data:', error);
//             alert('Error fetching hourly forecast data. Please try again.');
//         });
// }

// function displayWeather(data) {
//     const tempDivInfo = document.getElementById('temp-div');
//     const weatherInfoDiv = document.getElementById('weather-info');
//     const weatherIcon = document.getElementById('weather-icon');
//     const hourlyForecastDiv = document.getElementById('hourly-forecast');

//     // Clear previous content
//     weatherInfoDiv.innerHTML = '';
//     hourlyForecastDiv.innerHTML = '';
//     tempDivInfo.innerHTML = '';

//     if (data.cod === '404') {
//         weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
//     } else {
//         const cityName = data.name;
//         const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
//         const description = data.weather[0].description;
//         const iconCode = data.weather[0].icon;
//         const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

//         const temperatureHTML = `
//             <p>${temperature}°C</p>
//         `;

//         const weatherHtml = `
//             <p>${cityName}</p>
//             <p>${description}</p>
//         `;

//         tempDivInfo.innerHTML = temperatureHTML;
//         weatherInfoDiv.innerHTML = weatherHtml;
//         weatherIcon.src = iconUrl;
//         weatherIcon.alt = description;

//         showImage();
//     }
// }

// function displayHourlyForecast(hourlyData) {
//     const hourlyForecastDiv = document.getElementById('hourly-forecast');

//     const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)

//     next24Hours.forEach(item => {
//         const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
//         const hour = dateTime.getHours();
//         const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
//         const iconCode = item.weather[0].icon;
//         const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

//         const hourlyItemHtml = `
//             <div class="hourly-item">
//                 <span>${hour}:00</span>
//                 <img src="${iconUrl}" alt="Hourly Weather Icon">
//                 <span>${temperature}°C</span>
//             </div>
//         `;

//         hourlyForecastDiv.innerHTML += hourlyItemHtml;
//     });
// }

// function showImage() {
//     const weatherIcon = document.getElementById('weather-icon');
//     weatherIcon.style.display = 'block'; // Make the image visible once it's loaded
// }

const apiKey = '9836f62401a246d6acf163745241009'; // Your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value.trim(); // Trim any extra whitespace
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    // Construct the API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            // Update the weather information in the HTML
            document.getElementById('city-name').textContent = `City: ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data: ' + error.message);
        });
}
