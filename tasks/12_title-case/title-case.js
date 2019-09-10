export function titleCase(str) {
  let arr = str
      .toLowerCase()
      .split(' ');
  arr.forEach((e, i) => arr[i] = e.charAt(0).toUpperCase() + e.slice(1));
  return arr.join(' ');
}
