export function humanYearsCatYearsDogYears(humanYears) {
  const result = [humanYears, 15, 15];
  if (humanYears > 1) {
    result[1] += 9;
    result[2] += 9;
    if (humanYears > 2) {
      result[1] += (humanYears - 2) * 4;
      result[2] += (humanYears - 2) * 5;
    }
  }
  return result;
}
