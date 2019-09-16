/**
 * rankToRoman - converts decimal
 * rank (number with only one non-null digit)
 * of any number to roman numbers (e.g. 500 to D).
 * Depends on romanDig function
 *
 * @param {Number} rank
 * @param {Number} digit
 * @return {String}
 */
function rankToRoman(rank, digit) {
  switch (digit) {
    case 1:
    case 2:
    case 3: return romanDig(1 * rank).repeat(digit);
    case 4: return romanDig(1 * rank) + romanDig(5 * rank);
    case 5: return romanDig(5 * rank);
    case 6:
    case 7:
    case 8: return romanDig(5 * rank) + romanDig(1 * rank).repeat(digit - 5);
    case 9: return romanDig(1 * rank) + romanDig(10 * rank);
    default: return '';
  }
}

/**
 * romanDig - converts number to one roman number if
 * it's possible. If not, returns empty string
 *
 * @param {Number} number
 * @return {String}
 */
function romanDig(number) {
  switch (number) {
    case 1: return 'I';
    case 5: return 'V';
    case 10: return 'X';
    case 50: return 'L';
    case 100: return 'C';
    case 500: return 'D';
    case 1000: return 'M';
    default: return '';
  }
}

/**
 * convertToRoman - converts decimal number
 * to roman number
 *
 * @param {Number} num
 * @return {String}
 */
export function convertToRoman(num) {
  const numStr = num.toString().split('').map(Number);
  let rank = Math.pow(10, numStr.length);
  return numStr.reduce((result, currDig) => {
    rank /= 10;
    return result + rankToRoman(rank, currDig);
  }, '');
}
