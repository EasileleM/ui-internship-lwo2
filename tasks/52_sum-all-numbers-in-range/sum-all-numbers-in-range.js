/**
 * sumAll - returns sum of all numbers in given range
 * @example
 * // return 10.
 * sumAll([1, 4])
 * @param {Array} range
 * @return {Number}
 */
export function sumAll(range) {
  const right = Math.max(...range);
  const left = Math.min(...range);
  let result = 0;
  for (let i = left; i <= right; i++) {
    result += i;
  }
  return result;
}

