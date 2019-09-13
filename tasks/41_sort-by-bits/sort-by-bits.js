// String version
// function countBits(a) {
//   return (a
//       .toString(2)
//       .match(/[1]/g) || [])
//       .length;
// }

// Bitwise version, faster than previous
function countBits(a) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    if (a & (1 << i)) {
      result++;
    }
  }
  return result;
}

export function sortByBits(arr) {
  return arr.sort((a, b) => {
    let bitsA = countBits(a);
    let bitsB = countBits(b);
    if (bitsA !== bitsB) {
      return bitsA - bitsB;
    }
    return a - b;
  });
}
