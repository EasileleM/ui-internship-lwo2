/**
 * palindrome - check if given string is palindrome
 * or not. A palindrome is a word or sentence that's spelled
 * the same way both forward and backward,
 * ignoring punctuation, case, and spacing.
 * @example
 * // return true
 * palindrome('eye')
 * @example
 * // return false
 * palindrome('nope')
 * @param {string} str
 * @return {boolean}
 */
export function palindrome(str) {
  const target = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const halfTargetLen = target.length / 2;
  for (let i = 0; i < halfTargetLen; i++) {
    if (target.charAt(i) !== target.charAt(target.length - 1 - i)) {
      return false;
    }
  }
  return true;
}
