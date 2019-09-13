export function destroyer(arr, ...targets) {
  return targets.reduce((result, target) => {
    return result
        .filter((value) => target !== value);
  }, arr);
}
