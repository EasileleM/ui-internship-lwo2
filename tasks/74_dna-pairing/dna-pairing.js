/**
 * pairElement - return 2d array with sub-arrays, which
 * contain one character from str and such
 * DNA character that together they form complete DNA pair
 * @example
 * // return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
 * DNAStrand('ATCGA')
 * @param {string} str
 * @return {Array}
 */
export function pairElement(str) {
  const pairs = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'};
  return str
      .split('')
      .map((value) => [value, pairs[value]]);
}
