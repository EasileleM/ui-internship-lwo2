export function humanizeFormat(number) {
  if (number === undefined) {
    return '';
  }
  switch (number % 100) {
    case 11:
    case 12:
    case 13: return number + 'th';
  }
  switch (number % 10) {
    case 1: return number + 'st';
    case 2: return number + 'nd';
    case 3: return number + 'rd';
    default: return number + 'th';
  }
}
