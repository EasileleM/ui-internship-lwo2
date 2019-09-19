/**
 * binaryEncode - encode string of characters
 * from given sequence of binary digits
 * @example
 * // return 'Real programs don't eat cache.'
 * binaryEncode('01010010 01100101 01100001 01101100 00100000 01110000' +
 * '01110010 01101111 01100111 01110010 01100001 01101101 01110011' +
 * '00100000 01100100 01101111 01101110 00100111 01110100 00100000' +
 * '01100101 01100001 01110100 00100000 01100011 01100001 01100011' +
 * '01101000 01100101 00101110')
 * @param {string} str
 * @return {string}
 */
export function binaryEncode(str) {
  if (!str) {
    return '';
  }
  return Array
      .from(str)
      .map((value) => {
        let tempCode = value.charCodeAt(0).toString(2);
        while (tempCode.length !== 8) {
          tempCode = '0' + tempCode;
        }
        return tempCode;
      })
      .join(' ');
}
