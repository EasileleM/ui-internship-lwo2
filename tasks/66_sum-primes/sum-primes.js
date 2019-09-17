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
 * sumPrimes - returns sum of all prime numbers in
 * that are less or equal to input number
 * @example
 * // return 73156
 * sumPrimes(977)
 * @param {number} num
 * @return {number}
 */
export function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}
