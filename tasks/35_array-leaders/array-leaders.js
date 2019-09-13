export function arrayLeaders(arr) {
  const result = [];
  for (let i = arr.length - 1, sum = 0; i >= 0; sum += arr[i], i--) {
    if (arr[i] > sum) {
      result.push(arr[i]);
    }
  }
  return result.reverse();
}
