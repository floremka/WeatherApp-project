function inputCity(event) {
  event.preventDefault();

  let inputText = document.querySelector("#input-text");

  let h1 = document.querySelector("#h1Text");
  if (inputText.value) {
    h1.innerHTML = inputText.value;
  } else {
    h1.innerHTML = null;
    alert("sorry enter city");
  }
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
