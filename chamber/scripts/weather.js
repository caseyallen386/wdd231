import { getData } from "./getdata.js";

const lat = 41.3067639;
const lon = -111.9641492;
const APIKEY = "58427fa3cc0f21f3cbf6215da6877f7e";
let cnt = 4;

const weatherUrl = {
    current : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`,

    forcast : `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${APIKEY}&units=imperial`,
}

const currentWeather =  document.getElementById('todays-weather');

function getWeatherIconUrl(icon){
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

function getCurrentWeather(weatherData){
    console.log(weatherData)
    
    const theWeather = weatherData.weather[0];

    currentWeather.querySelector('h3').textContent = weatherData.name;

    currentWeather.querySelector('.weather-icon').innerHTML = `<img src="${getWeatherIconUrl(theWeather.icon)}" alt="${theWeather.main}">${theWeather.description}`;
    
}

function getWeatherForcast(weatherData){
    console.log(weatherData);
}

getData(weatherUrl.current, getCurrentWeather );

getData(weatherUrl.forcast, getWeatherForcast );
