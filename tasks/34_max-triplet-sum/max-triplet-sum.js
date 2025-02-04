export function maxTripletSum(arr) {
  let arrClone = Array(...arr);
  let result = 0;
  for (let i = 0; i < 3; i++) {
    const tempMax = Math.max(...arrClone);
    arrClone = arrClone.filter((value) => value !== tempMax);
    result += tempMax;
  }
  return result;
}

// bonus solution
// export function maxNSum(arr, n) {
//   let arrClone = Array(...arr);
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     const tempMax = Math.max(...arrClone);
//     arrClone = arrClone.filter((value) => value !== tempMax);
//     result += tempMax;
//   }
//   return result;
// }
