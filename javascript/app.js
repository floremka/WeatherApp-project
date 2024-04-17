function dispalayTemparature(response) {
  console.log(response.data.temperature.current);
  let temperature = document.querySelector("#temp");
  let currentTemperature = Math.round(response.data.temperature.current);
  temperature.innerHTML = `${currentTemperature}`;
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
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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

function displayFocast() {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let forcastHTML = "";

  days.forEach(function (day) {
    forcastHTML =
      forcastHTML +
      `
<div class="weatherDay">
<div class ="forecastDay">${day}</div>
<div class= "forecastIcon">☀</div>
<div class="forecastTemperatures">
<div class ="forecastTemperature">
<strong>15&#176;</strong>
</div>
<div class="forecastTemparature">9&#176;</div>

</div>

</div>


`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forcastHTML;
}

timeCity();
displayFocast();
