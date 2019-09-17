export function uniqueInOrder(iterable) {
  const result = [];
  for (const value of iterable) {
    if (result[result.length-1] !== value) {
      result.push(value);
    }
  }
  return result;
}
