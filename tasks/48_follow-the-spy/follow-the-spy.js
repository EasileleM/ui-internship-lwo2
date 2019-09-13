export function followTheSpy(arr) {
  let currentRoute = arr[0];
  let result = [arr[0][0]];
  while (currentRoute) {
    result.push(currentRoute[1]);
    currentRoute = arr.find((value) => value[0] === currentRoute[1]);
  }
  return result.join(', ');
}
