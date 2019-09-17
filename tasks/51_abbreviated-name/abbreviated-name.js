/**
 * abbreviated - converting full name in
 * abbreviation form
 * @example
 * // return 'Verbovyi'
 * abbreviated('Verbovyi')
 * @example
 * // return 'Verbovyi D. O.'
 * abbreviated('Verbovyi Dmytro Oleksandrovych')
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
