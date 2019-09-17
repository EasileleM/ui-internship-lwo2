export function stringExpansion(str) {
  let result = '';
  const checkNumber = /^\d+$/;
  let repetitions = 0;
  for (let i = 0; i < str.length; i++) {
    if (checkNumber.test(str.charAt(i))) {
      repetitions = Number(str.charAt(i));
    } else {
      result += str.charAt(i).repeat(repetitions);
    }
  }
  return result || str;
}

