/**
 * uniteUnique - creating new array with unique elements
 * of arrays, that were passes as arguments into function
 * @example
 * // return [1, 2, 3, 5]
 * uniteUnique([1, 2, 3], [5, 2, 1])
 * @param  {...Array} arrays
 * @return {Array}
 */
export function uniteUnique(...arrays) {
  return arrays.reduce((result, array) => {
    return result.concat(array.filter((val) => !result.includes(val)));
  });
}
