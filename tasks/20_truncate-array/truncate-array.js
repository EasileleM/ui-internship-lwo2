// Should i use pure function in this case?
export function truncateArray(arr, howMany) {
  const result = arr.slice();
  result.splice(0, howMany);
  return result;
}
