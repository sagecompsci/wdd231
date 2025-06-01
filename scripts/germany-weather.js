const temp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.64&units=imperial&appid=7d6cbdb752c3c0b27cc0de60fe56872c";


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data){
    temp.innerHTML = `${data.main.temp}`;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", `${icon}`);
    weatherIcon.setAttribute("alt", `${desc}`);
    caption.textContent = `${desc}`;
}

apiFetch();

