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
 * sumPrimeIndexedElements - return sum of elements occupying
 * prime-numbered indices
 * @example
 * // return 7
 * sumPrimeIndexedElements([1, 2, 3, 4])
 * @param {array} array
 * @return {number}
 */
export function sumPrimeIndexedElements(array) {
  let result = 0;
  for (let i = 2; i < array.length; i++) {
    if (isPrime(i)) {
      result += array[i];
    }
  }
  return result;
}
