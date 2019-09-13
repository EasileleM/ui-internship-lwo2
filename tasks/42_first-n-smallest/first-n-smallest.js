export function firstNSmallest(arr, n) {
  let arrCloneRev = Array(...arr).reverse();
  while (arrCloneRev.length !== n) {
    arrCloneRev.splice(arrCloneRev.indexOf(Math.max(...arrCloneRev)), 1);
  }
  return arrCloneRev.reverse();
}
