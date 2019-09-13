export function checkLetters(arr) {
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();
  for (const letter of secondStr) {
    if (firstStr.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}
