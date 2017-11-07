class Clock {
  constructor() {
    //will have the capability to change attributes
    //based upon a set interval of time
    //have a place to house procedures
    this.procedures = [];
    window.setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    let currentTime = new Date();
    this.procedures.forEach(procedure => procedure(currentTime));
  }

  addProcedures(...procedures) {
    this.procedures.push(...procedures);
  }
}
