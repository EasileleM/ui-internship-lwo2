export function rot13Encoder(str) {
  const isLetter = /^[A-Za-z]+$/;
  str = str.split('');
  str.forEach((letter, charIndex) => {
    if (isLetter.test(letter)) {
      const curLetterCode = str[charIndex].charCodeAt(0);
      if (isLetter.test(String.fromCharCode(curLetterCode - 13))) {
        str[charIndex] = String.fromCharCode(curLetterCode - 13);
      } else {
        str[charIndex] = String.fromCharCode(curLetterCode + 13);
      }
    }
  });
  return str.join('');
}
