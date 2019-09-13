export function getVowelCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = 0;
  for (const char of str) {
    if (vowels.indexOf(char) !== -1) {
      result++;
    }
  }
  return result;
}
