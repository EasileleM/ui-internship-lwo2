export function minNumberToPrime(arr) {
  const sum = arr.reduce((sum, value) => sum += value);
  const isPrime = (num) => {
    for (let i = 2, numSqrt = Math.sqrt(num); i < numSqrt; i++) {
      if (!(num % i)) {
        return false;
      }
    }
    return true;
  };
  let result = 0;
  while (!isPrime(sum + result)) {
    result++;
  }
  return result;
}
