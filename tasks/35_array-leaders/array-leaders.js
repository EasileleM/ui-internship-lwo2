export function arrayLeaders(arr) {
  const result = [];
  let sum = arr.reduce((sum, value) => sum + value);
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (arr[i] > sum) {
      result.push(arr[i]);
    }
  }
  return result;
}
