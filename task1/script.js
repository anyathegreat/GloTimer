const timer  = document.getElementById("timer");
const timerHours = document.getElementById("timer-hours");
const timerMinutes = document.getElementById("timer-minutes");
const timerSeconds = document.getElementById("timer-seconds");

let hours = +timerHours.innerText;
let seconds = +timerSeconds.innerText;
let minutes = +timerMinutes.innerText;

function updateDisplay(){
  timerHours.innerText = String(hours).padStart(2, "0");
  timerMinutes.innerText = String(minutes).padStart(2, "0");
  timerSeconds.innerText = String(seconds).padStart(2, "0");
}

function decrementTime(){
  if(seconds > 0){
    seconds--;
  }else if(minutes > 0){
    minutes--;
    seconds = 59;
  }else if(hours > 0){
    hours--;
    minutes = 59;
    seconds = 59;
  }else{
    clearInterval(timerInterval);
    alert("Время вышло");
  }

  updateDisplay();
}

const timerInterval = setInterval(decrementTime, 1000);