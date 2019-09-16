/**
 * convertHTML - convert &<>"' characters into html entities
 *
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
