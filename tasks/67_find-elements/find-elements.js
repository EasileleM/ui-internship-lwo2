/**
 * findElement - return first element in the array
 * that passes the given test function
 * @example
 * // return 8
 * findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
 * @param {Array} arr
 * @param {Function} func
 * @return {*}
 */
export function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
}
