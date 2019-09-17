export function findEqualIndex(arr) {
  // 0 in args of reduce is necessary to avoid exception
  // which would appear in case where arr is an empty array
  let sumRight = arr.reduce((sum, value) => sum + value, 0);
  let sumLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    sumRight -= arr[i];
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft += arr[i];
  }
  return -1;
}
