export function largestOfFour(arr) {
  const result = [];
  arr.forEach(function(subArr) {
    if (subArr.length === 0) result.push(NaN);
    else {
      result
          .push(subArr.reduce(
              (max, num) => num > max ? num : max, -Infinity));
    }
  });
  return result;
}
