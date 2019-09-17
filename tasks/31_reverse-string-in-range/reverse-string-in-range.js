export function reverseStringInRange(str, range) {
  const strArr = Array.from(str);
  strArr.splice(range[0],
      range[1] - range[0] + 1,
      ...strArr.slice(range[0], range[1] + 1).reverse());
  return strArr.join('');
}

// Faster solution with for loop
//
// export function reverseStringInRange(str, range) {
//   const strArr = Array.from(str);
//   let left = range[0];
//   let right = range[1];
//   while (left <= range[1]) {
//     strArr[left++] = str.charAt(right--);
//   }
//   return strArr.join('');
// }

