/**
 * deepClone - return a deep copy of passed object
 * @example
 * //return {a: 1, b:{c:4}}
 * deepClone({a:1, b:{c:4}})
 * @param {Object} obj
 * @return {Object}
 */
export function deepClone(obj) {
  const cloneObj = {};
  for (const prop in obj) {
    if (typeof(obj[prop]) === 'object') {
      cloneObj[prop] = deepClone(obj[prop]);
    } else {
      cloneObj[prop] = obj[prop];
    }
  }
  return cloneObj;
}
