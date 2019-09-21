/**
 * addedChar - return one of three identical characters that
 * were added into one string(first argument) to produce
 * another(second argument)
 * @example
 * //return a
 * addedChar('hello', 'heaalalo')
 * @param {string} initialStr string before insertions
 * @param {string} changedStr string after insertions
 * @return {string} instance of inserted characters
 */
export function addedChar(initialStr, changedStr) {
  let changedStrCopy = changedStr;
  for (const letter of initialStr) {
    changedStrCopy = changedStrCopy.replace(letter, '');
  }
  return changedStrCopy.charAt(0);
}
