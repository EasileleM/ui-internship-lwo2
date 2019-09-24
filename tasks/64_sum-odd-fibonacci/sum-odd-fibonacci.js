/**
 * sumFibs - returns sum of all odd fibonacci numbers
 * that are less or equal to given number
 * @example
 * // return 1785
 * sumFibs(1000)
 * @param {number} num
 * @return {number}
 */
export function sumFibs(num) {
  let result = 1;
  let previousFib = 1;
  let currentFib = 1;
  while (currentFib <= num) {
    if (currentFib % 2) {
      result += currentFib;
    }
    currentFib = currentFib + previousFib;
    previousFib = currentFib - previousFib;
  }
  return result;
}
