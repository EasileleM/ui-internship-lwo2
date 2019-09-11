export function largestOfFour(arr) {
  const result = [];
  const findMax = (max, num) => Math.max(max, num);
  arr.forEach(function(subArr) {
    if (subArr.length === 0) {
      result.push(NaN);
    } else {
      result
          .push(subArr.reduce(findMax, -Infinity));
    }
  });
  return result;
}
