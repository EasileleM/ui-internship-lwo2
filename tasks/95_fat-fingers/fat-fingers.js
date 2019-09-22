/**
 * fatFingers - emulates Freddy's keyboard misses
 * by changing passed string into what he actually typed
 * Freddy always hit capsLock when trying to hit 'a'.
 * @param {string} poorParody
 * @return {string}
 */
export function fatFingers(poorParody) {
  let uniqueOriginal = '';
  let capsLock = false;
  for (const letter of poorParody) {
    if (letter.toUpperCase() === 'A') {
      capsLock = !capsLock;
    } else if (capsLock) {
      if (letter.toUpperCase() === letter) {
        uniqueOriginal += letter.toLowerCase();
      } else {
        uniqueOriginal += letter.toUpperCase();
      }
    } else {
      uniqueOriginal += letter;
    }
  }
  return uniqueOriginal;
}
