/**
 * isPrime - checks if the given number prime or not
 * @example
 * // return true
 * isPrime(7)
 * @param {number} num number to check
 * @return {boolean}
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
 * sumPrimeIndexedElements - return sum of elements occupying
 * prime-numbered indices
 * @example
 * // return 7
 * sumPrimeIndexedElements([1, 2, 3, 4])
 * @param {array} array elements
 * @return {number} sum of prime indexed elements
 */
export function sumPrimeIndexedElements(array) {
  let sum = 0;
  for (let i = 2; i < array.length; i++) {
    if (isPrime(i)) {
      sum += array[i];
    }
  }
  return sum;
}
