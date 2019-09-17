/**
 * spinalCase - convert given string into spinal case
 * @example
 * // return 'this-is-spinal-tap'
 * spinalCase('thisIsSpinalTap')
 * @param {string} str
 * @return {string}
 */
export function spinalCase(str) {
  const tokens = [''];
  const isLetter = /[A-Za-z]/;
  for (const char of str) {
    if (!isLetter.test(char) && tokens[tokens.length - 1].length) {
      tokens.push('');
    } else {
      if (char.toUpperCase() === char && tokens[tokens.length - 1].length) {
        tokens.push('');
      }
      tokens[tokens.length - 1] += char.toLowerCase();
    }
  }
  return tokens.join('-');
}
