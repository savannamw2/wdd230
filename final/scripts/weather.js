
const weatherIcon = document.querySelector('#weather-icon');

const maxTemp = document.querySelector('#max-temp');

const currentTemp = document.querySelector('#temp');
const humidity = document.querySelector('#hum');
const overallWeather = document.querySelector('#weather-title');

const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?lat=20.4230&lon=-86.9223&units=imperial&appid=6d7ca3e10d96adca7d3636cb6d24fdcf`;

async function apitFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (err) {
        console.log(err);
    }
}

function displayResults(data) {
    maxTemp.innerHTML = ` ${data.main.temp_max}&deg;F`;
    maxTemp.style.color = "red";
    currentTemp.innerHTML = `${data.main.temp}`;
    humidity.innerHTML = `${data.main.humidity}`;
    overallWeather.innerHTML = `${data.weather[0].main}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", `${desc} icon`);
    captionDesc.textContent = `${desc}`;
}

apitFetch();
