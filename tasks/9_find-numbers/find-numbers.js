export function getNumbers(str) {
  const arr = str.match(/\d+/g);
  for (let i = 0; i < arr.length; i++) arr[i] = Number(arr[i]);
  return arr;
}
