/**
 * greatestCommonDivisor - return greatest common divisor
 * of two passed numbers
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function greatestCommonDivisor(a, b) {
  if (!a) {
    return b;
  }
  return greatestCommonDivisor(b % a, a);
}
