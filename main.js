let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentTime = new Date();

let day = days[currentTime.getDay()];
let month = months[currentTime.getMonth()];
let date = currentTime.getDate();

let hour = currentTime.getHours();
let amPm = hour < 12 ? "AM" : "PM";

hour = hour > 12 ? hour - 12 : hour;
hour = ("0" + hour).slice(-2);

let minute = currentTime.getMinutes();
minute = ("0" + minute).slice(-2);

let currentDate = document.querySelector("#selector-date");
currentDate.innerHTML = `${day}, ${month} ${date}, ${hour}:${minute} ${amPm}`;
//

function displayWeatherCondition(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  //     document.querySelector("#temperature").innerHTML = Math.round(
  //      response.data.main.temp
  //      );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
// function searchCity(city) {
//  event.preventDefault();
//   let apiKey = "37841618efb8bb96a35c1afb0bcd8e2f";
//    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
//     .concat(city, "&appid=")
//      .concat(apiKey, "&units=metric");
//    axios.get(apiUrl).then(displayWeatherCondition);
//  }

//   function handleSubmit(event) {
//      event.preventDefault();
//     let city = document.querySelector("#city-input").value;
//      searchCity(city);
//   }

//  function searchLocation(position) {
//   let apiKey = "37841618efb8bb96a35c1afb0bcd8e2f";
//    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat="
//     .concat(position.coords.latitude, "&lon=")
//     .concat(position.coords.longitude, "&appid=")
//    .concat(apiKey, "&units=metric");
//    axios.get(apiUrl).then(displayWeatherCondition);
//  }

function search(event) {
  event.preventDefault();
  let apiKey = "37841618efb8bb96a35c1afb0bcd8e2f";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);

  //let cityElement = document.querySelector("#city");
  // let cityInput = document.querySelector("#city-input");
  // cityElement.innerHTML = cityInput.value;
}

//   function getCurrentLocation(event) {
//     event.preventDefault();
//      navigator.geolocation.getCurrentPosition(searchLocation);
//   }
//
//
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 24;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 75;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

//   let currentLocationButton = document.querySelector(
//     "#current-location-button"
//   );
//   currentLocationButton.addEventListener("click", getCurrentLocation);
//   searchCity("New York");

//     function showTemperature(response) {
//     console.log(response.data);
//     let temperature = Math.round(response.data.main.temp);
//     let temperatureElement = document.querySelector("#temperature");
//     let description = document.querySelector("#temperature-description");
//     temperatureElement.innerHTML = `${temperature}°C`;
//     description.innerHTML = response.data.weather[0].description;
//   }
