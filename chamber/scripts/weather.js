function toggleBannerVisibility() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const banner = document.getElementById('meetAndGreetBanner');
    banner.style.display = (currentDay >= 1 && currentDay <= 3) ? 'block' : 'none';
}

const currentWeatherDiv = document.getElementById("current-weather");
const weatherCardsDiv = document.getElementById("weather-cards");
const API_KEY = "e9392d319c356829c169ec3610ea97df";

const createWeatherCard = (weatherItem) => {
    return `<li class="card">
                <h3>${weatherItem.date}</h3>
                <div class="details">
                    <p>${weatherItem.temp}°C - ${weatherItem.description}</p>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.icon}.png" alt="Weather Icon">
                </div>
            </li>`;
};

const updateWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Washougal,US&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const currentWeather = {
                tempCelsius: (data.main.temp - 273.15).toFixed(2),
                description: data.weather[0].description,
                icon: data.weather[0].icon
            };
            const tempFahrenheit = ((currentWeather.tempCelsius * 9) / 5) + 32;
            currentWeatherDiv.innerHTML = `
                <h4>Current Weather</h4>
                <div class="details">
                    <p>${tempFahrenheit.toFixed(2)}°F - ${currentWeather.description}</p>
                    <img src="https://openweathermap.org/img/wn/${currentWeather.icon}.png" alt="Weather Icon">
                </div>`;
        })
        .catch((error) => console.error("Error fetching current weather:", error));
};

updateWeatherData();
toggleBannerVisibility();

const closeButton = document.getElementById("closeBannerButton");

closeButton.addEventListener("click", () => {
    document.getElementById('meetAndGreetBanner').style.display = "none";
});
