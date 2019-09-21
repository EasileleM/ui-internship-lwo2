/**
 * pairElement - return 2d array with sub-arrays, which
 * contain one character from str and such
 * DNA character that together they form complete DNA pair
 * @example
 * // return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
 * pairElement('ATCGA')
 * @param {string} dnaStrand
 * @return {Array} array with dna pairs
 */
export function pairElement(dnaStrand) {
  const pairs = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'};
  return dnaStrand
      .split('')
      .map((value) => [value, pairs[value]]);
}
