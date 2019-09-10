export function findLongestWord(str) {
  const reducer = (maxLen, currWord) => {
    return currWord.length > maxLen ? currWord.length : maxLen;
  };
  return str.split(' ').reduce(reducer, 0);
}
