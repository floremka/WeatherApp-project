function dispalayTemparature(response) {
  console.log(response.data.temparature.current);
  let temparature = document.querySelector("#temp");
  let currentTemparature = Math.round(response.data.temparature.current);
  temparature.innerHTML = `${currentTemparature}`;
}
function inputCity(event, response) {
  event.preventDefault();
  console.log(response.data.temeparature.current);
  city = inputText.value;
  key = ea956222f2o8bbfat9d06fcb925a34cb;
  let inputText = document.querySelector("#input-text");

  let h1 = document.querySelector("#h1Text");
  if (inputText.value) {
    h1.innerHTML = inputText.value;
  } else {
    h1.innerHTML = null;
    alert("sorry enter city");
  }
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
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
timeCity();
