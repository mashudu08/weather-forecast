//search engine function
function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}

let searchFormElememt = document.querySelector("#search-form");
searchFormElememt.addEventListener("submit", handleSearchSubmit);