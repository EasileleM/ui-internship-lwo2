export function largestOfFour(arr) {
  const result = [];
  arr.forEach(function(subArr) {
    if (!subArr.length) {
      result.push(NaN);
    } else {
      result
          .push(Math.max(...subArr));
    }
  });
  return result;
}
