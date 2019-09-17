/**
 * unpackArray - return an array of non-array elements,
 * that are nested in passed array,
 * accounting for varying levels of nesting
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
