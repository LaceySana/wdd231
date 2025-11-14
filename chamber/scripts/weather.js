const currentWeather = document.querySelector("#current-weather");
const weatherIcon = document.querySelector("#weather-icon");
const weatherForecast = document.querySelector("#weather-forecast");

const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=40.45&lon=-109.53&units=imperial&appid=4f4f80781538491f0a87ccabd7cb1af2";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.45&lon=-109.53&units=imperial&appid=4f4f80781538491f0a87ccabd7cb1af2";

apiFetch(currentUrl, displayCurrent);
apiFetch(forecastUrl, displayForecast);

async function apiFetch(url, displayResults) {
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


function displayCurrent(data) {
    const iconurl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const weatherDesc = data.weather[0].description;
    const p = document.createElement("p");
    
    const toTime = (secs) => (new Date(secs * 1000)).toLocaleTimeString("en-US", {timeZone: "America/Denver", hour: "2-digit", minute: "2-digit", hour12: true});
    
    p.innerHTML = `<strong>${Math.round(data.main.temp)}</strong>&degF
    <br>${weatherDesc}
    <br>High: ${Math.round(data.main.temp_max)}&degF
    <br>Low: ${Math.round(data.main.temp_min)}&degF
    <br>Humidity: ${data.main.humidity}%
    <br>Sunrise: ${toTime(data.sys.sunrise)}
    <br>Sunset: ${toTime(data.sys.sunset)}`;


    weatherIcon.setAttribute("src", iconurl);
    weatherIcon.setAttribute("alt", weatherDesc);
    currentWeather.appendChild(p);
}

function displayForecast(data) {
    const p = document.createElement("p");

    // Future enhancement- loop through data, looking at 1 day at a time and find real high and low estimated for each day in given data

    const roundHigh = (index) => Math.round(data.list[index].main.temp_max)
    const roundLow = (index) => Math.round(data.list[index].main.temp_min)
    const getDay = (index) => new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date(data.list[index].dt_txt))

    p.innerHTML = `Today: <strong>${roundHigh(0)}&deg <span class="low-temp">${roundLow(0)}&deg</span>F</strong>
    <br><br>${getDay(8)}: <strong>${roundHigh(8)}&deg <span class="low-temp">${roundLow(8)}&deg</span>F</strong>
    <br><br>${getDay(16)}: <strong>${roundHigh(16)}&deg <span class="low-temp">${roundLow(16)}&deg</span>F</strong>`;

    weatherForecast.appendChild(p);
}