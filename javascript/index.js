const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

console.log(chronometer);

function printTime() {
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let twoDigitsMinutes = chronometer.twoDigitsNumber(minutes);

  minDec.innerText = twoDigitsMinutes[0];
  minUni.innerText = twoDigitsMinutes[1];
}

function printSeconds() {
  let secs = chronometer.getSeconds();
  let twoDigitsSeconds = chronometer.twoDigitsNumber(secs);

  secDec.innerText = twoDigitsSeconds[0];
  secUni.innerText = twoDigitsSeconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = "STOP";

  btnLeft.className = "btn stop";
  chronometer.startClick(printTime);
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";

  btnLeft.className = "btn start";
  chronometer.stopClick();
}
// setStartBtn();

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText == "START") {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
  // console.log(chronometer.startClick(setStartBtn));
  // chronometer.startClick(setStartBtn);
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // if (btnRight.innerText == "RESET") {
  //   setSplitBtn();
  // } else {
  //   setResetBtn();
  // }
});
