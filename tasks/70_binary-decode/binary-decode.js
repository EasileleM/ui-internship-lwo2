/**
 * binaryDecode - return sequence of characters that are decoded
 * from the passed binary numbers sequence
 * @example
 * // return 'bonfire!'
 * binaryDecode('00100000 01100010 01101111 01101110' +
 * '01100110 01101001 01110010 01100101 00100001')
 * @param {string} str
 * @return {string}
 */
export function binaryDecode(str = '') {
  return str
      .split(' ')
      .map((value) => {
        return String.fromCharCode(parseInt(value, 2));
      })
      .join('');
}
