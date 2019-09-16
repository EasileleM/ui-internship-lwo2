/**
 * diffArray - returns symmetric difference of the two arrays
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
export function diffArray(arr1, arr2) {
  const arr1Diff = arr1.filter((val) => arr2.indexOf(val) === -1);
  const arr2Diff = arr2.filter((val) => arr1.indexOf(val) === -1);
  return arr1Diff.concat(arr2Diff);
}
