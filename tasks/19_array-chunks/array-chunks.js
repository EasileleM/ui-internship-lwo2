export function arrayChunks(arr, size) {
  const reducer = (result, currentValue) => {
    if (result[result.length-1].length < size) {
      result[result.length-1].push(currentValue);
    } else {
      result.push([currentValue]);
    }
    return result;
  };
  return arr.reduce(reducer, [[]]);

  // Solution with basic for loop
  // const result = [];
  // for (let i = 0; i < arr.length; i += size) {
  //   result.push(arr.slice(i, i + size));
  // }
  // return result;
}
