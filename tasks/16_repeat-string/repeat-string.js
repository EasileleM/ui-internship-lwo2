export function repeatStringNumTimes(str, num) {
  if (num <= 0 || !Number.isFinite(num)) {
    return '';
  }
  return str.repeat(num);
}
