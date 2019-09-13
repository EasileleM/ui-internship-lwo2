export function firstNSmallest(arr, n) {
  let arrClone = Array(...arr);
  const result = Array(...arr);
  const mins = new Set();
  for (let i = 0; i < n; i++) {
    let min = Math.min(...arrClone);
    arrClone = arrClone.filter((value) => value !== min);
    mins.add(min);
  }
  return result.filter((value) => mins.has(value));
}
// TODO
