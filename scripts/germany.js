const temp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCaption = document.querySelector("figcaption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=4f4f80781538491f0a87ccabd7cb1af2';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
        
    } catch (error) {
        console.error(error);
    }
    
}

apiFetch();

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconurl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", `${iconurl}`);
    weatherIcon.setAttribute("alt", `Icon for ${data.weather[0].description}`) 
    weatherCaption.textContent = data.weather[0].description;
}