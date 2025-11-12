const currentWeather = document.querySelector("#current-weather");
const weatherIcon = document.querySelector("#weather-icon");
const weatherForecast = document.querySelector("#weather-forecast");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.45&lon=-109.53&units=imperial&appid=4f4f80781538491f0a87ccabd7cb1af2";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.45&lon=-109.53&units=imperial&appid=4f4f80781538491f0a87ccabd7cb1af2";

async function apiFetch() {
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
    const iconurl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const weatherDesc = data.weather[0].description;
    const p = document.createElement("p");
    
    const toTime = (secs) => new Date(secs * 1000).toISOString().slice(11, 16);
    
    p.innerHTML = `<strong>${data.main.temp}</strong>&degF
    <br>${weatherDesc}
    <br>High: ${data.main.temp_max}&degF
    <br>Low: ${data.main.temp_min}&degF
    <br>Humidity: ${data.main.humidity}%
    <br>Sunrise: ${toTime(data.sys.sunrise)}
    <br>Sunset: ${toTime(data.sys.sunset)}`;


    weatherIcon.setAttribute("src", iconurl);
    weatherIcon.setAttribute("alt", weatherDesc);
    currentWeather.appendChild(p);


}