export function titleCase(str) {
  let arr = str
      .toLowerCase()
      .split(' ');
  const changeWord = (w, i) => arr[i] = w.charAt(0).toUpperCase() + w.slice(1);
  arr.forEach(changeWord);
  return arr.join(' ');
}
