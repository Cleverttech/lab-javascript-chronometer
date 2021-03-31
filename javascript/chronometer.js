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
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
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

  splitClick(num1, num2) {
    let x = this.twoDigitsNumber(this.getMinutes());
    let y = this.twoDigitsNumber(this.getSeconds());

    return `${x}:${y}`;
  }
}
