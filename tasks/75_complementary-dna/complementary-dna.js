/**
 * DNAStrand - In DNA strings, symbols "A" and "T" are complements
 * of each other, as "C" and "G". Passed argument is one
 * side of the DNA; Function return the other complementary side.
 * @example
 * // return 'AGC'
 * DNAStrand('TCG')
 * @param {string} str
 * @return {string}
 */
export function DNAStrand(str) {
  let result = '';
  const pairs = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'};
  for (const symbol of str) {
    result += pairs[symbol];
  }
  return result;
}
