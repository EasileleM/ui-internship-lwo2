export function getNumbers(str) {
  return str.match(/\d+/g).map((num) => Number(num));
}
