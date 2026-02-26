const apiKey = "b2559924a78e2bfe398479dcd61955fd";

async function fetchweatherData(city) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

    console.log(res);
    let data = await res.json();

    console.log(data);


    updateweatherUI(data);

}

let cityelem = document.querySelector(".city");
let temperature = document.querySelector(".temp");

let windspeed = document.querySelector(".wind-speed");

let humelem = document.querySelector(".humidity");

let visielem = document.querySelector(".visibility-destance");

let decelem = document.querySelector(".description-text");

let date = document.querySelector(".date");

function updateweatherUI(value) {

    cityelem.textContent = value.name;

    temperature.textContent = `${Math.round(value.main.temp)}°`;

    windspeed.textContent = `${value.wind.speed} km/h`;

    humelem.textContent = `${value.main.humidity}%`;

    visielem.textContent = `${value.visibility/1000} km/h`;

    decelem.textContent = value.weather[0].description;

    const currentDate = new Date();
    date.textContent = currentDate.toDateString();

}

const formelement = document.querySelector(".search-form");
const inputelement = document.querySelector(".city-input");

formelement.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = inputelement.value;
    if (city !== '') {
        fetchweatherData(city);
        inputelement.value = "";
    }

});