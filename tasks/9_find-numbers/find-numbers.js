export function getNumbers(str) {
  const arr = str.match(/\d+/g);
  for (let i = 0; i<arr.length; i++) arr[i]=+arr[i];
  return arr;
}
