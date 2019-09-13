export function rot13Encoder(arr) {
  const isLetter = /^[A-Za-z]+$/;
  return arr
      .split('')
      .map((char) => {
        if (isLetter.test(char)) {
          const curLetterCode = char.charCodeAt(0);
          if (isLetter.test(String.fromCharCode(curLetterCode - 13))) {
            return String.fromCharCode(curLetterCode - 13);
          } else {
            return String.fromCharCode(curLetterCode + 13);
          }
        }
        return char;
      })
      .join('');
}

