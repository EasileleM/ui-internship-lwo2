/**
 * convertHTML - convert &<>"' characters into html entities
 * @example
 * // return 'Dolce &amp; Gabbana'
 * convertHTML('Dolce & Gabbana')
 * @param {String} str
 * @return {String}
 */
export function convertHTML(str) {
  return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
}
