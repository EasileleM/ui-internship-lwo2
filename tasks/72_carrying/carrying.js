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
 * @param {number} a first number
 * @param {number} b second number
 * @return {(number|function)} sum of passed numbers or
 * carrier function with one number inside
 */
export function addTogether(a, b) {
  if (arguments.length > 0 && typeof(a) === 'number') {
    if (arguments.length > 1 && typeof(b) === 'number') {
      return a + b;
    } else if (arguments.length < 2) {
      return function(c) {
        if (typeof(c) === 'number') {
          return a + c;
        }
      };
    }
  }
}
