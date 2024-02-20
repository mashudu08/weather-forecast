function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
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