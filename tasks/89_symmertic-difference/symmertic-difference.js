/**
 * sym - takes two or more arrays and returns an array of the symmetric
 * difference of the provided arrays.
 * @example
 * // return [1,4]
 * sym([1,2,3,5,6], [2,3,4,6])
 * @param {*} arrays array of arrays
 * @return {Array} symmetric difference
 */
export function sym(...arrays) {
  const resultWithDublicates = arrays
      .reduce((diff, arr) => {
        const arrClone = arr.slice();
        diff.forEach((val) => {
          if (arr.includes(val)) {
            arr = arr.filter((value) => value !== val);
          }
        });
        arrClone.forEach((val) => {
          if (diff.includes(val)) {
            diff = diff.filter((value) => value !== val);
          }
        });
        diff = diff.concat(arr);
        return diff;
      })
      .sort();
  return Array.from(new Set(resultWithDublicates));
}
