export function findCloseIndex(str, startIndex) {
  let bracketsCount = 0;
  if (str.charAt(startIndex) !== '(') {
    return -1;
  }
  for (let i = startIndex + 1; i < str.length; i++) {
    if (str.charAt(i) === '(') {
      bracketsCount++;
    } else if (str.charAt(i) === ')') {
      if (bracketsCount) {
        bracketsCount--;
      } else {
        return i;
      }
    }
  }
  return -1;
}
