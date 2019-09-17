export function runningAverage() {
  let sum = 0;
  let amount = 0;
  function average(value) {
    sum += value;
    amount += 1;
    return sum / amount;
  }
  return average;
}
