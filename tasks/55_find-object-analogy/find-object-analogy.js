/**
 * whatIsInAName - return an array of all objects from arrObj
 * that have matching property and value pairs with target
 *
 * @param {Array} arrObj
 * @param {Object} target
 * @return {Array}
 */
export function whatIsInAName(arrObj, target) {
  const arrObjCopy = JSON.parse(JSON.stringify(arrObj));
  return arrObjCopy.filter((obj) => {
    for (const prop in target) {
      if (!(obj.hasOwnProperty(prop) && obj[prop] === target[prop])) {
        return false;
      }
    }
    return true;
  });
}

