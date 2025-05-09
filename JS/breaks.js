let pomodoroButton = document.getElementById("pomodoro-button");
let shortBreakButton = document.getElementById("shortBreak-button");
let longBreakButton = document.getElementById("longBreak-button");

let body = document.body;
let main = document.querySelector("main");
let progress = document.querySelector(".progress-container");
let pause = document.querySelector(".pause-start");
let addTask = document.querySelector(".add-task-button");

const lightColorRed = "#c15c5c";
const colorRed = "#ba4949";
const darkColorRed = "#a74242";

const lightColorGreen = "#599667";
const colorGreen = "#50875c";
const darkColorGreen = "#497c54";

const lightColorBlue = "#58799c";
const colorBlue = "#506e8e";
const darkColorBlue = "#496683";

function changeBreak(c, cDark, cLight) {
  if (c === "#ba4949") {
    pomodoroButton.style.backgroundColor = cDark;
    shortBreakButton.style.backgroundColor = cLight;
    longBreakButton.style.backgroundColor = cLight;
  }
  if (c === "#50875c") {
    pomodoroButton.style.backgroundColor = cLight;
    shortBreakButton.style.backgroundColor = cDark;
    longBreakButton.style.backgroundColor = cLight;
  }
  if (c === "#506e8e") {
    pomodoroButton.style.backgroundColor = cLight;
    shortBreakButton.style.backgroundColor = cLight;
    longBreakButton.style.backgroundColor = cDark;
  }

  body.style.backgroundColor = c;
  main.style.backgroundColor = cLight;
  progress.style.backgroundColor = cDark;
  pause.style.color = cLight;
  addTask.style.backgroundColor = cDark;
}
