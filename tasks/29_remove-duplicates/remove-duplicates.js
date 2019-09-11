export function removeDuplicates(arr) {
  // It would be very convenient to use Set()
  // But, it is undefined, idk why(stackoverflow says nothing so far)
  // There is a "hand-made" set solution
  const map = {};
  return arr.filter((num) => num in map ? false : map[num] = true);
}
