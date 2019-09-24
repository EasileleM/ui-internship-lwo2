/**
 * swapCases - swaps letter cases in the given string
 * @example
 * // return 'hELLO wORLD'
 * swapCases('Hello World')
 * @param {string} str
 * @return {string}
 */
export function swapCases(str) {
  return str
      .split('')
      .map((letter) => {
        if (letter === letter.toUpperCase()) {
          return letter.toLowerCase();
        }
        return letter.toUpperCase();
      })
      .join('');
}
