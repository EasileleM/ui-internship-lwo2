export function arrayPlusArray(arr1, arr2) {
  const result = [];
  const len1 = arr1.length;
  const len2 = arr2.length;
  for (let i = 0; i < len1 || i < len2; i++) {
    result.push((arr1[i] || 0) + (arr2[i] || 0));
  }
  return result;
}
