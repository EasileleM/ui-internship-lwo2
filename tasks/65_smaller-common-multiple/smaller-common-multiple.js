/**
 * smallestCommons - find the smallest common
 * multiple of the provided parameters
 * @example
 * // return 60
 * smallestCommons([5, 1])
 * @example
 * // return 60
 * smallestCommons([1, 5])
 * @param {Array} range
 * @return {number}
 */
export function smallestCommons(range) {
  const left = Math.min(...range);
  const right = Math.max(...range);
  let result = right;
  let currentNum = right - 1;
  let multiplier = 1;
  while (currentNum >= left) {
    for (currentNum = right - 1; currentNum >= left; currentNum--) {
      if (result % currentNum) {
        result = right * (++multiplier);
        break;
      }
    }
  }
  return result;
}
