class ClockUI {
  constructor() {
    this.ClockModel = new Clock();
    this.ClockModel.addProcedures(
      this.appendHours,
      this.appendMinutes,
      this.appendSeconds
    );
  }
  appendHours(currentTime) {
    let hours = currentTime.getHours();
    if (hours > 12) {
      hours = hours - 12;
    } else if (hours < 10) {
      hours = "0" + hours;
    }
    document.getElementById("hours").textContent = hours;
  }
  appendMinutes(currentTime) {
    let minutes = currentTime.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("minutes").textContent = minutes;
  }
  appendSeconds(currentTime) {
    let seconds = currentTime.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("seconds").textContent = seconds;
  }
}

window.onload = function() {
  new ClockUI();
};
