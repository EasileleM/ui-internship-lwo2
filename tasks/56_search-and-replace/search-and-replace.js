/**
 * myReplace - Perform a search and replace on the sentence using
 * the arguments provided and return the new sentence
 * @example
 * // return 'He is Sitting on the couch'
 * myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
 * @param {String} str
 * @param {String} target
 * @param {String} change
 * @return {String}
 */
export function myReplace(str, target, change) {
  if (target.charAt(0) === target.charAt(0).toUpperCase()) {
    change = change.charAt(0).toUpperCase() + change.slice(1);
  }
  return str.replace(target, change);
}
