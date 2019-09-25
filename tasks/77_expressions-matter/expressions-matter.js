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
  const option1 = a + b + c;
  const option2 = a * b * c;
  const option3 = a + b * c;
  const option4 = a * b + c;
  const option5 = a * (b + c);
  const option6 = (a + b) * c;
  return Math.max(option1, option2, option3, option4, option5, option6);
}
