export function peopleInBus(busStops) {
  return busStops.reduce((passengerIn, oneStop) => {
    return passengerIn + oneStop[0] - oneStop[1];
  }, 0);
}
