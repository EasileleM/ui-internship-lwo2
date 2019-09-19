/**
 * isPrime - checks if the given number prime or not
 * @example
 * // return true
 * isPrime(7)
 * @param {number} num
 * @return {number}
 */
function isPrime(num) {
  for (let i = 2, numSqrt = Math.sqrt(num); i <= numSqrt; i++) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
}

/**
 * numPrimorial - return the result of multiplying
 * first N(first argument) prime numbers
 * (e.g. first 3 prime numbers - 2, 3, 5)
 * @example
 * // return 2310
 * numPrimorial(5)
 * @param {number} num
 * @return {number}
 */
export function numPrimorial(num) {
  let counter = 0;
  let result = 1;
  for (let i = 2; counter !== num; i++) {
    if (isPrime(i)) {
      result *= i;
      counter++;
    }
  }
  return result;
}
