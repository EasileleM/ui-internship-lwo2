export function titleCase(str) {
  const words = str
      .toLowerCase()
      .split(' ');
  const changeWord = (word, wordIndex) => {
    return words[wordIndex] = word.charAt(0).toUpperCase() + word.slice(1);
  };
  words.forEach(changeWord);
  return words.join(' ');
}
