/**
 * unpackArray - flatten a nested array
 * @example
 * // return  [1, 2, 3, 4]
 * unpackArray([1, [2], [3, [[4]]]])
 * @param {Array} arr
 * @return {Array}
 */
export function unpackArray(arr) {
  const result = [];
  (function unpackArrayInner(currElement) {
    if (Array.isArray(currElement)) {
      currElement.forEach((elem) => unpackArrayInner(elem));
    } else {
      result.push(currElement);
    }
  })(arr);
  return result;
}
