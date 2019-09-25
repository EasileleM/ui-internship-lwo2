/**
 * findMissing - return missing element of
 * passed consecutive elements of an Arithmetic Progression
 * @example
 * // return 4
 * findMissing([1,2,3,5])
 * @param {Array} arithmProg consecutive elements of
 * an Arithmetic Progression with one missing element
 * @return {number} missed element
 */
export function findMissing(arithmProg) {
  for (let i = 2; i < arithmProg.length; i++) {
    const previousDelta = Math.abs(arithmProg[i - 1] - arithmProg[i - 2]);
    const currentDelta = Math.abs(arithmProg[i] - arithmProg[i - 1]);
    if (previousDelta > currentDelta) {
      return arithmProg[i - 2] + (arithmProg[i] - arithmProg[i - 1]);
    }
    if (previousDelta < currentDelta) {
      return arithmProg[i - 1] + (arithmProg[i - 1] - arithmProg[i - 2]);
    }
  }
}
