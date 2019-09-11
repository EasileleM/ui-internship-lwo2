export function findLongestWord(str) {
  const reducer = (maxLen, currWord) => Math.max(maxLen, currWord.length);
  return str.split(' ').reduce(reducer, 0);
}
