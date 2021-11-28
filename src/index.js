function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let uvElement = document.querySelector("#uv");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.main.wind.speed);
}

let apiKey = "ea27d4912ee585534fb0acd080727de6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
