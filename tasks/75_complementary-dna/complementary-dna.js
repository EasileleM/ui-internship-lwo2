/**
 * DNAStrand - In DNA strings, symbols "A" and "T" are complements
 * of each other, as "C" and "G". Passed argument is one
 * side of the DNA; Function return the other complementary side.
 * @example
 * // return 'AGC'
 * DNAStrand('TCG')
 * @param {string} dnaStrand
 * @return {string} opposite dna strand to passed dna strand
 */
export function DNAStrand(dnaStrand) {
  let oppositeDnaStrand = '';
  const pairs = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'};
  for (const symbol of dnaStrand) {
    oppositeDnaStrand += pairs[symbol];
  }
  return oppositeDnaStrand;
}
