function dispalayTemparature(response) {
  console.log(response.data.temperature.current);
  let temperature = document.querySelector("#temp");
  let currentTemperature = Math.round(response.data.temperature.current);
  temperature.innerHTML = `${currentTemperature}`;

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

let form = document.querySelector("#firstForm");
form.addEventListener("submit", inputCity);

function timeCity() {
  let currentTime = new Date();

  let Hours = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentTime.getDay()];
  let times = document.querySelector("#time");
  times.innerHTML = `${day} ${Hours}: ${minute} : ${second}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);

  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[date.getDay()];
}

function getWeatherForecast() {
  let apiKey = "ea956222f2o8bbfat9d06fcb925a34cb";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayFocast);
}

function displayFocast(response) {
  console.log(response.data);

  let forcastHTML = "";

  response.data.daily.forEach(function (day) {
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
<strong>${Math.round(day.temperature.maximun)}&#176;</strong>
</div>
<div class="forecastTemparature">${Math.round(
        day.temperature.minimum
      )}&#176;</div>

</div>

</div>


`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forcastHTML;
}

timeCity();
