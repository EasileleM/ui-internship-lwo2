/**
 * squares - takes a positive integer n and returns the amount
 * of numbers between 1 and n (inclusive) that can be represented
 * as the difference of two perfect squares.
 * @param {number} n
 * @return {number}
 */
export function squares(n) {
  let amount = 0;
  const matchNumbers = new Set();
  // a^2 - (a-1)^2 = 2 * a - 1 is min possible
  // perfect square difference
  for (let a = 1; 2 * a - 1 <= n; a++) {
    for (let b = 0; b < a; b++) {
      const squareDiff = a * a - b * b;
      if (squareDiff <= n && !matchNumbers.has(squareDiff)) {
        amount++;
        matchNumbers.add(squareDiff);
      }
    }
  }
  return amount;
}
