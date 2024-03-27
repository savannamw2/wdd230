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
                    <p>${weatherItem.temp}°F - ${weatherItem.description}</p>
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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Washougal,US&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            const forecast = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);
            weatherCardsDiv.innerHTML = forecast.map((item) => {
                const weatherItem = {
                    date: item.dt_txt.split(" ")[0],
                    temp: (((item.main.temp - 273.15) * 9) / 5 + 32).toFixed(2),

                    description: item.weather[0].description,
                    icon: item.weather[0].icon
                };
                return createWeatherCard(weatherItem);
            }).join("");
        })
        .catch((error) => console.error("Error fetching weather forecast:", error));


};


updateWeatherData();
toggleBannerVisibility();

const isBannerDay = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3;
};

// toggle the banner visibility
const toggleBanner = () => {
    banner.style.display = isBannerDay() ? "block" : "none";
};


const closeButton = document.getElementById("closeBannerButton");

closeButton.addEventListener("click", () => {
    document.getElementById('meetAndGreetBanner').style.display = "none";
});
