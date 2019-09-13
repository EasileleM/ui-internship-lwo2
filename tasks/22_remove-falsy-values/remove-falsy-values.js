export function removeFalsyValues(arr) {
  return arr.filter((value) => Boolean(value));
}
