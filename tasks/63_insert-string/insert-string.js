/**
 * insert - inserts one string into another on given position
 * If no insertable string is given, returns unchanged string
 * @example
 * // return 'We are doing some JavaScript exercises.'
 * insert('We are doing some exercises.','JavaScript ',18)
 * @param {string} str
 * @param {string} insertable
 * @param {number} position
 * @return {string}
 */
export function insert(str, insertable, position = 0) {
  if (!insertable) {
    return str;
  }
  return str.slice(0, position) + insertable + str.slice(position);
}
