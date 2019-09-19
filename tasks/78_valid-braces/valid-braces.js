/**
 * validBraces - takes a string of braces, and determines
 * if the order of the braces is valid. It should return true
 * if the string is valid, and false if it's invalid.
 * A string of braces is considered valid if all braces
 * are matched with the correct brace.
 * @param {string} str
 * @return {string}
 */
export function validBraces(str) {
  const stack = [];
  const openBr = ['(', '{', '['];
  const closeBr = [')', '}', ']'];
  for (const bracket of str) {
    const stackHead = stack[stack.length - 1];
    if (openBr.includes(bracket)) {
      stack.push(bracket);
    } else if (openBr.indexOf(stackHead) === closeBr.indexOf(bracket)) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}
