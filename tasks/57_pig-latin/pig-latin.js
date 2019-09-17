/**
 * translatePigLatin - translates provided word into Pig Latin
 * @example
 * // return "eightway"
 * translatePigLatin('eight')
 * @param {String} str
 * @return {String}
 */
export function translatePigLatin(str) {
  const vowels = 'qeuioa';
  if (vowels.includes(str.charAt(0))) {
    return str + 'way';
  }
  let consEnd = 1;
  while (!vowels.includes(str.charAt(consEnd))) {
    consEnd++;
  }
  return str.slice(consEnd) + str.substr(0, consEnd) + 'ay';
}
