export function truncateArray(arr, howMany) {
  // Should i use pure function in this case?
  const result = arr.slice();
  result.splice(0, howMany);
  return result;
}
