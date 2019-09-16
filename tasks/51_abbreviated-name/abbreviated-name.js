/**
 * abbreviated - converting full name in
 * abbreviation form
 *
 * @param {String} str
 * @return {String}
 */
export function abbreviated(str) {
  return str
      .split(' ')
      .map((value, index) => {
        if (!index) {
          return value;
        }
        return value.charAt(0) + '.';
      })
      .join(' ');
}
