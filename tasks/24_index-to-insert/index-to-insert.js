export function getIndexToInsert(arr, num) {
  const tempResult = arr
      .sort((a, b) => a - b)
      .findIndex((compareValue) => compareValue >= num);
  if (tempResult === -1) {
    return arr.length;
  }
  return tempResult;
}

