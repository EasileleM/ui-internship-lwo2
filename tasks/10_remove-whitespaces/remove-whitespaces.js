export function trimWhiteSpaces(str) {
  return str
      .replace(RegExp(' ', 'g'), '');
}
