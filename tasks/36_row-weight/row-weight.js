export function rowWeights(arr) {
  const result = [0, 0];
  arr.forEach((value, index) => {
    if (index%2) {
      result[1] += value;
    } else {
      result[0] +=value;
    }
  });
  return result;
}
