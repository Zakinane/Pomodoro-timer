let skip = document.querySelector(".skip");
let stopStart = document.querySelector(".pause-start");
let timer = document.querySelector(".timer");
let progressBar = document.getElementById("progress-bar");

let rawInput = parseInt(prompt("Durée en secondes (max 5999) :"));
let setTime = Math.min(rawInput, 5999);
let time = setTime * 1000;
progressBar.max = time;
progressBar.value = 0;

let isStarted = false;
let intervalID = null;

function calcDisplayedTime() {
  minutes = Math.floor(time / 60000);
  secondes = Math.floor((time % 60000) / 1000);
}

function updateTimerText() {
  calcDisplayedTime();
  timer.textContent =
    String(minutes).padStart(2, "0") + ":" + String(secondes).padStart(2, "0");
}

function startTimer() {
  if (intervalID !== null) return;
  intervalID = setInterval(() => {
    if (time > 0) {
      updateTimerText();
      progressBar.value = setTime * 1000 - time;
      time -= 100;
    } else {
      stopStart.textContent = "Reset";
      skip.style.display = "none";
      clearInterval(intervalID);
      intervalID = null;
      isStarted = false;
    }
  }, 100);
}

function pauseTimer() {
  clearInterval(intervalID);
  intervalID = null;
}

updateTimerText();

stopStart.addEventListener("click", () => {
  if (time === 0) {
    time = setTime * 1000;
    progressBar.value = 0;
    updateTimerText();
    stopStart.textContent = "Start";
    return;
  }
  isStarted = !isStarted;
  if (isStarted) {
    skip.style.display = "flex";
    stopStart.textContent = "Pause";

    startTimer();
  } else if (time !== 0) {
    stopStart.textContent = "Restart";
    pauseTimer();
  } else {
    updateTimerText()
    time = setTime;
  }
});
