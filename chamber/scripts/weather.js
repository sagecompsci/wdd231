const weatherIcon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");
const weather = document.querySelector("#weather");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const urlCurrent = "https://api.openweathermap.org/data/2.5/weather?lat=-37.87&lon=175.682&units=imperial&appid=7d6cbdb752c3c0b27cc0de60fe56872c";


async function currentFetch() {
    try {
        const response = await fetch(urlCurrent);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayWeatherCurrent(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}


function displayWeatherCurrent(data) {
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", `${icon}`)
    temp.innerHTML = `${data.main.temp}℉`;
    weather.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    sunrise.innerHTML = `${data.sys.sunrise}am`;
    sunset.innerHTML = `${data.sys.sunset}pm`;

}


const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");
const overmorrow = document.querySelector("#overmorrow");

const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat=-37.87&lon=175.682&units=imperial&appid=7d6cbdb752c3c0b27cc0de60fe56872c";


async function forecastFetch() {
    try {
        const responseForecast = await fetch(urlForecast);
        if (responseForecast.ok){
            const dataForecast = await responseForecast.json();
            console.log(dataForecast);
            // displayWeatherCurrent(dataForecast);
        } else {
            throw Error(await responseForecast.text());
        }
    } catch(error){
        console.log(error);
    }
}

function displayForecast(data){
    // today.innerHTML =
}
currentFetch();
forecastFetch();