/**
 * telephoneCheck - return true if the passed
 * string is a valid US phone number.
 * @example
 * // return true
 * telephoneCheck('1 555-555-5555')
 * @example
 * // return false
 * telephoneCheck('1 555)555-5555')
 * @param {string} phoneNumber
 * @return {boolean}
 */
export function telephoneCheck(phoneNumber) {
  const checkNum =
  /^1?\s?(\([0-9]{3}\)\s?|[0-9]{3}[-\s,]?)[0-9]{3}[-\s,]?[0-9]{4}$/;
  return checkNum.test(phoneNumber);
}
