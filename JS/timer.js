let skip = document.querySelector(".skip");
let stopStart = document.querySelector(".pause-start");
let timer = document.querySelector(".timer");
let progressBar = document.getElementById("progress-bar");

let reveilSound = new Audio("./audio/Reveil electronique.mp3");
let startSound =  new Audio("./audio/start.wav")
let pauseSound = new Audio("./audio/pause.wav")
let finishSound = new Audio("./audio/finish.wav")

reveilSound.volume = 0.3
startSound.volume = 0.2
pauseSound.volume = 0.2
finishSound.volume = 0.2

let rawInput = parseInt(prompt("Durée en secondes (max 5999) :"));
let duration = Math.min(rawInput, 5999);

let timeStart; // When the start is pressed
let timePaused = 0; // timePaused = timeRestart - timePaus
let timeLeft; // Date.now - timeStart 

progressBar.max = duration;
progressBar.style.width = "0%";

let isStarted = false;
let intervalID = null;

const pomodoroTime = 25 * 60;
const shortBreakTime = 5 * 60;
const longBreakTime = 20 * 60;

function updateDisplay(t) {
  minutes = Math.floor(t / 60);
  secondes = t % 60;

  timer.textContent =
    String(minutes).padStart(2, "0") + ":" + String(secondes).padStart(2, "0"); // timer
  document.title = timer.textContent; // page title

}

function tick() {
  if (!timeStart) return;

  const now = Date.now();
  const elapsed = Math.floor((now - timeStart) / 1000); // secondes passed
  const timeLeft = Math.max(duration - elapsed, 0); // secondes left
  progressBar.style.width = `${(elapsed / duration) * 100}%`;

  updateDisplay(timeLeft);

  if (timeLeft <= 0) {
    clearInterval(intervalID);
    intervalID = null;
    isStarted = false;
    stopStart.textContent = "Reset";
    skip.style.display = "none";
    reveilSound.play();
  }
}


function startTimer() {
  startSound.play()
  // restart after pause
  if (!timeStart) {
    timeStart = Date.now();
  } else {
    timeStart += Date.now() - timePaused;
  }
  intervalID = setInterval(tick, 500);
  updateDisplay(duration);
  tick(); // no 1s delay
}


function pauseTimer() {
  clearInterval(intervalID);
  intervalID = null;
  timePaused = Date.now();
  pauseSound.play();
}

function resetTimer() {
  clearInterval(intervalID);
  intervalID = null;
  isStarted = false;
  timeStart = null;
  timePaused = 0;
  progressBar.style.width = "0%";
  stopStart.textContent = "Start";
  skip.style.display = "flex";
  progressBar.style.width = "0%";
  reveilSound.pause();
  reveilSound.currentTime = 0; // restart beep beep from start

  rawInput = parseInt(prompt("Durée en secondes (max 5999) :"));
  duration = Math.min(rawInput, 5999);
  updateDisplay(duration);
}

updateDisplay(duration);

stopStart.addEventListener("click", () => {
  // if finished click reset
  if (!isStarted && progressBar.style.width === "100%") {
    resetTimer();
    return;
  }

  isStarted = !isStarted;

  if (isStarted) {
    stopStart.textContent = "Pause";
    skip.style.display = "flex";
    startTimer();
  } else {
    stopStart.textContent = "Restart";
    pauseTimer();
  }
});

skip.addEventListener("click", () => {
  clearInterval(intervalID);
  updateDisplay(0);
  stopStart.textContent = "Reset";
  skip.style.display = "none";
  progressBar.style.width = "100%";
  isStarted = false;
});
