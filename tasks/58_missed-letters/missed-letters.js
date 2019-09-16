/**
 * findLetter - finds missing letter in sequence of
 * letters, sorted in alphabetical order
 *
 * @param {String} str
 * @return {String}
 */
export function findLetter(str) {
  let prevCharCode = str.charCodeAt(0);
  for (let i = 1; i < str.length; i++) {
    const currCharCode = str.charCodeAt(i);
    if (prevCharCode + 1 !== currCharCode) {
      return String.fromCharCode(prevCharCode + 1);
    }
    prevCharCode = currCharCode;
  }
  return undefined;
}
