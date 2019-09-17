export function maxProduct(arr) {
  let result = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    result = Math.max(result, arr[i] * arr[i + 1]);
  }
  return result;
}
