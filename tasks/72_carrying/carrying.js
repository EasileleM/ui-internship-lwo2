/**
 * addTogether - return sum of two arguments. If only one argument
 * is provided, then return a function that expects one argument
 * and returns the sum. If either argument isn't a valid number,
 * return undefined.
 * @example
 * // return 5
 * addTogether(2, 3)
 * @example
 * // return 4
 * addTogether(1)(3)
 * @param {number} a
 * @param {number} b
 * @return {(number|function)}
 */
export function addTogether(a, b) {
  function addTogetherInner(c) {
    if (typeof(c) === 'number') {
      return a + c;
    }
  }
  if (typeof(a) === 'number') {
    if (arguments.length === 1) {
      return addTogetherInner;
    }
    return addTogetherInner(b);
  }
}
