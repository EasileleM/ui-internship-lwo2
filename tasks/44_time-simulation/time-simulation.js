export class SimTime {
  constructor() {
    this.time = 0;
    this.speed = 1;
    this.realTime = 0;
  }
  get() {
    return this.time;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
  update(currentRealTime) {
    if (currentRealTime < this.realTime) {
      throw String('Time mustn\'t go backwords');
      // String wrapper used there to avoid ESlint complaints
    }
    this.time += (currentRealTime - this.realTime) * this.speed;
    this.realTime = currentRealTime;
  }
}
