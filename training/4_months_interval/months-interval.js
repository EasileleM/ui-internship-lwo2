const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
/**
 * monthsInterval - return names of month that
 * are laying between passed dates(inclusive)
 * @param {Object} date1
 * @param {Object} date2
 * @return {string[]}
 */
export function monthsInterval(date1, date2) {
  let minDate;
  let maxDate;
  if (date1.getTime() > date2.getTime()) {
    maxDate = new Date(date1.getTime());
    minDate = new Date(date2.getTime());
  } else {
    maxDate = new Date(date2.getTime());
    minDate = new Date(date1.getTime());
  }
  const monthsSet = new Set();
  while (minDate.getTime() < maxDate.getTime() && monthsSet.size !== 12) {
    monthsSet.add(minDate.getMonth());
    minDate.setMonth(minDate.getMonth() + 1);
  }
  monthsSet.add(minDate.getMonth());
  return Array
      .from(monthsSet)
      .sort((a, b) => a - b)
      .map((value) => months[value]);
}
