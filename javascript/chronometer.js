class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    console.log(this.currentTime);
    // callback();
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    // console.log(minutes);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    // console.log(minutes);
    return seconds;
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick(num) {
    let hours = this.currentTime / 3600;
    let mins = (this.currentTime % 3600) / 60;
    let secs = this.currentTime % 60;

    num = "0";
    if (hours > 0) {
      if (mins < 10) {
        ("0");
      } else {
        ("");
      }
      return (num += `${hours}:`);
    }
    num += `${mins}:` + (secs < 10 ? "0" : "");

    num += `${secs}`;

    return num;
  }
}
