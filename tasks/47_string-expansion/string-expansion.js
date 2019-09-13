export function stringExpansion(str) {
  const words = str.split(/[0-9]+/g);
  // this regex lead to one useless array element "" with 0 index
  const repeatitions = str.split(/[A-Za-z]+/g);
  // this regex lead to one useless array element ""
  // with repetition.lenght - 1 index
  // it cause these magic numbers in the loop below
  const amountOfWords = words.length - 1;
  for (let i = 0; i < amountOfWords; i++) {
    const currentWord = words[i+1];
    words[i + 1] = '';
    for (const letter of currentWord) {
      words[i + 1] += letter.repeat(repeatitions[i] % 10);
    }
  }
  return words.join('');
}
