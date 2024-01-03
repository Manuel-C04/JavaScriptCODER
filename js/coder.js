const apiKey = '1d468c9aea68f8435a5665d1211f20ec';
const weatherInfoDiv = document.getElementById('weather-info');

// Cargar la última ciudad al iniciar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  const lastCity = localStorage.getItem('lastCity');
  if (lastCity) {
    document.getElementById('city').value = lastCity;
  }
});

function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Por favor, ingrese una ciudad.');
    return;
  }
  const geocodingUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(geocodingUrl)
    .then(response => response.json())
    .then(geocodingData => {
      const lat = geocodingData.coord.lat;
      const lon = geocodingData.coord.lon;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Guardar la ciudad en localStorage
          localStorage.setItem('lastCity', city);

          // Mostrar la información del clima
          displayWeather(data);
        })
        .catch(error => {
          console.error('Error al obtener datos del clima:', error);
          weatherInfoDiv.innerHTML = 'Error al obtener datos del clima. Por favor, intenta nuevamente.';
        });
    })
    .catch(error => {
      console.error('Error al obtener coordenadas:', error);
      weatherInfoDiv.innerHTML = 'Error al obtener coordenadas. Por favor, intenta nuevamente.';
    });
}

function displayWeather(data) {
  const cityName = data.name;
  const temperatureKelvin = data.main.temp;
  const temperatureCelsius = temperatureKelvin - 273.15;
  const weatherDescription = data.weather[0].description;

  const weatherInfoHTML = `<p>Clima en ${cityName}: ${temperatureCelsius.toFixed(2)}°C, ${weatherDescription}</p>`;
  weatherInfoDiv.innerHTML = weatherInfoHTML;
}



