/**
 * pairwise - finds element pairs whose sum equal the second argument
 * arg and returns the sum of their indices.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
export function pairwise(numbers, target) {
  let result = 0;
  const usedIndexes = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if ((numbers[i] + numbers[j] === target)
      && !usedIndexes.has(i) && !usedIndexes.has(j)) {
        result += i + j;
        usedIndexes.add(i);
        usedIndexes.add(j);
      }
    }
  }
  return result;
}
