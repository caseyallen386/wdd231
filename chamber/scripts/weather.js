import { getData } from "./getdata.js";

const lat = 41.3067639;
const lon = -111.9641492;
const APIKEY = "58427fa3cc0f21f3cbf6215da6877f7e";

// Forecast Data gets to entries perday, a morning and and afternoon forecast. But it also includes todays forecast aswell
let cnt = 8;

const weatherUrl = {
    current : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`,

    forecast : `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`,
}



function getWeatherIconUrl(icon){
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

function displayCurrentWeather(weatherData){

    const currentWeather =  document.getElementById('todays-weather');
    console.log(weatherData);
    
    const main = weatherData.main
    
    const weather = weatherData.weather[0];

    currentWeather.querySelector('h3').textContent = weatherData.name;

    currentWeather.querySelector('.current-temp').innerHTML = `${Math.floor(main.temp)}&deg;`

    currentWeather.querySelector('.feels-like').innerHTML = `Feels Like ${Math.floor(main.feels_like)}&deg;`;

    currentWeather.querySelector('.temp-hi-lo').innerHTML = `&#8593;${Math.floor(main.temp_max)}&deg; / &#8595;${Math.floor(main.temp_min)}&deg;`;

    currentWeather.querySelector('.current-weather-icon').innerHTML = `<img src="${getWeatherIconUrl(weather.icon)}" alt="${weather.main}">${weather.description}`;
    
}

function displayWeatherForcast(weatherData){

    const todayDate = new Date();
    const today = todayDate.getDate();
    
    // console.log(todayDate.getDay());
    
    
    // console.log(weatherData);

    const forecastsContainer = document.querySelectorAll('.forecast');
    const location = weatherData.city.name;
    const forecasts = weatherData.list;

    // first we need to filter out todays forecast 
    // as well as pass it to the displayCurrentWeather func

    // console.log(forecasts);



    const forecastWeather = forecasts.filter( (forecast) => {
        const forecastDate = new Date(forecast.dt_txt);
        const fd = forecastDate.getDate();
        const timeOfDay = forecastDate.getHours();
        

        return (fd > today) && (fd <= today + 3) && (timeOfDay == 12);
    } );

    
    // console.log(forecastWeather);
    

    for (let i = 0; i < forecastsContainer.length; i++){


        let fd = forecastWeather[i]; 
        let weather = fd.weather[0]
        let main = fd.main;
    
        let weekday = new Date(fd.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })

        console.log(weekday);
        forecastsContainer[i].innerHTML = `
        <h4>${weekday}</h4>
        <span><img src="${getWeatherIconUrl(weather.icon)}" alt="${weather.main}" width="50" height="50"></span>
        <span>${weather.description}</span>
        <span class="temp-hi-lo">&#8593;${Math.floor(main.temp_max)}&deg; / &#8595;${Math.floor(main.temp_min)}&deg;</span>
        
        `;
    }
    
}


getData(weatherUrl.current, displayCurrentWeather );

getData(weatherUrl.forecast, displayWeatherForcast );
