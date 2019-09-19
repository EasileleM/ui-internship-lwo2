/**
 * expressionMatter - return the largest number
 * obtained after inserting the following operators and brackets: +, *, ()
 * into passed expression firstArg ? secondArg ? thirdArg
 * @example
 * // return 5
 * expressionMatter(1, 3, 1)
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
export function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, a + b * c, a * b + c, a * (b + c),
      (a + b) * c);
}
