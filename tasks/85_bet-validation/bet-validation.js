/**
 * validate_bet - check is bet valid or not.
 * Valid bet should contain certain amount of numbers
 * (first element of first argument) and every number
 * should belong to this interval - [1, 2nd element of 1st argument].
 * Bet string should contain only numbers separated by comma or space.
 * If bet is valid - return sorted array of bet numbers, otherwise
 * return 'None'
 * @param {Array} range [amountOfBetNumbers,
 * upperBoundOfIntervalStartedFrom1]
 * @param {string} betNumsStr string with bet numbers
 * @return {string} sorted array of bet numbers or 'None'
 */
// eslint-disable-next-line camelcase
export function validate_bet(range, betNumsStr) {
  const betNumsArray = betNumsStr.split(/[,\s]+/g);
  const onlyNumbers = /^[0-9]*$/;
  if (betNumsArray.length !== range[0]) {
    return 'None';
  }
  for (const number of betNumsArray) {
    if (!onlyNumbers.test(number) || parseInt(number) > range[1]) {
      return 'None';
    }
  }
  return betNumsArray.sort();
}
