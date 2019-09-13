export function getAverage(arr) {
  const markSum = arr.reduce((sum, value) => sum + value);
  return Math.floor(markSum / arr.length);
}
