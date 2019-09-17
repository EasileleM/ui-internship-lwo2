export function firstNSmallest(arr, n) {
  const arrCloneRev = Array(...arr).reverse();
  while (arrCloneRev.length !== n) {
    arrCloneRev.splice(arrCloneRev.indexOf(Math.max(...arrCloneRev)), 1);
  }
  return arrCloneRev.reverse();
}
