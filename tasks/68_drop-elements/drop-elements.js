/**
 * dropElements - return all array(first argument) elements with index,
 * that are larger or equal than index of first element, which
 * matches with predicate(second argument)
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
