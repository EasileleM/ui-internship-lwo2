/**
 * traverseTree - traversing tree and applying callback
 * function to each node of given tree
 * @param {Object} obj
 * @param {Function} callback
 */
export function traverseTree(obj, callback) {
  callback(obj);
  for (const child of obj.children) {
    traverseTree(child, callback);
  }
}
