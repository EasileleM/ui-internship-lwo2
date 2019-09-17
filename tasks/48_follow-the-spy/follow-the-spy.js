export function followTheSpy(arr) {
  let index = 0;
  let result = [];
  const arrLen = arr.length;
  while ((result.length - 1 !== arrLen) && index < arrLen) {
    let currentRoute = arr[index];
    result = [arr[index][0]];
    while (currentRoute) {
      result.push(currentRoute[1]);
      currentRoute = arr.find((value) => value[0] === currentRoute[1]);
    }
    index++;
  }
  return result.join(', ');
}
