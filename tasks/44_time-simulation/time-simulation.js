export function SimTime() {
  this.time = 0;
  this.speed = 1;
  this.realTime = 0;
  this.get = function() {
    return this.time;
  };
  this.setSpeed = function(newSpeed) {
    this.speed = newSpeed;
  };
  this.update = function(currentRealTime) {
    if (currentRealTime < this.realTime) {
      throw String('Time mustn\'t go backwords');
      // String wrapper used there to avoid ESlint complaints
    }
    this.time += (currentRealTime - this.realTime) * this.speed;
    this.realTime = currentRealTime;
  };
}
