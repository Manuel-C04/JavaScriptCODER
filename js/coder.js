document.getElementById('search').addEventListener('click', function () {
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value.trim();

    if (cityName) {
        obtenerDatosClima(cityName);
    } else {
        console.log('Por favor, ingrese el nombre de la ciudad.');
    }
});

async function obtenerDatosClima(ciudad) {
    const apiKey = '1d468c9aea68f8435a5665d1211f20ec';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    try {
        const respuesta = await fetch(apiUrl);

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener datos del clima.');
        }

        const datosClima = await respuesta.json();

        mostrarDatosClima(datosClima);
    } catch (error) {
        console.error('Error al obtener datos del clima:', error.message);
        mostrarError();
    }
}

function mostrarDatosClima(datos) {
    const weatherInfoDiv = document.getElementById('weather-info');
    const temperatura = datos.main.temp;
    const descripcion = datos.weather[0].description;

    weatherInfoDiv.innerHTML = `<p>Temperatura: ${temperatura} °C</p><p>Descripción: ${descripcion}</p>`;
}

function mostrarError() {
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.textContent = 'Hubo un error al obtener datos del clima. Por favor, inténtelo nuevamente.';
}




