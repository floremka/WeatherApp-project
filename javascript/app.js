function dispalayTemparature(response) {
  console.log(response.data.temperature.current);
  let temperature = document.querySelector("#temp");
  let currentTemperature = Math.round(response.data.temperature.current);
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  temperature.innerHTML = `${currentTemperature}`;
  timeElement.innerHTML = formatTime(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" />`;

  getWeatherForecast(response.data.city);
}
function inputCity(event) {
  event.preventDefault();

  let inputText = document.querySelector("#input-text");

  let h1 = document.querySelector("#cityElement");
  if (inputText.value) {
    h1.innerHTML = inputText.value;
  } else {
    h1.innerHTML = null;
    alert("sorry enter city");
  }

  let city = inputText.value;
  let apiKey = "ea956222f2o8bbfat9d06fcb925a34cb";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(dispalayTemparature);
}

function formatTime(date) {
  let Hours = date.getHours();
  let minutes = date.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${Hours}: ${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);

  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[date.getDay()];
}

function getWeatherForecast(city) {
  let apiKey = "ea956222f2o8bbfat9d06fcb925a34cb";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayFocast);
}

function displayFocast(response) {
  console.log(response.data);

  let forcastHTML = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 7) {
      forcastHTML =
        forcastHTML +
        `
<div class="weatherDay">
<div class ="forecastDay">${formatDay(day.time)}</div>
<div class= "forecastIcon">
<img src ="${day.condition.icon_url}"/>
</div>
<div class="forecastTemperatures">
<div class ="forecastTemperature">
<strong>${Math.round(day.temperature.maximum)}&#176;</strong>
</div>
<div class="forecastTemparature">${Math.round(
          day.temperature.minimum
        )}&#176;</div>

</div>

</div>


`;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forcastHTML;
}

let form = document.querySelector("#firstForm");
form.addEventListener("submit", inputCity);
