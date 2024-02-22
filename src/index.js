function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if(minutes < 10){
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`
}

// search city function
function searchCity(city){
    // make api call and update the interface
    // seperation of concern
    let apiKey= "a9da343b49eoea401ffefd616fa0c85t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

//search engine function
function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchFormElememt = document.querySelector("#search-form");
searchFormElememt.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");