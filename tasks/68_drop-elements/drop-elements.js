/**
 * dropElements - Drop the elements of an array,
 * starting from the front, until the predicate returns true.
 * @example
 * // return [1, 0, 1]
 * dropElements([0, 1, 0, 1], function(n) {return n === 1;})
 * @param {Array} arr
 * @param {Function} func
 * @return {Array}
 */
export function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}
