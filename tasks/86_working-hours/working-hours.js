/**
 * formatWorkingHours - formats a working hours schedule,
 * given as an array of objects, in a human-friendly way(see example).
 * @example
 * // return [SAT: 10:00 - 13:00]
 * formatWorkingHours([{'day': 'sat', 'from' : '10:00', 'to' : '13:00'}])
 * @param {Object[]} schedule contains objects with day, form, to properties
 * @return {String[]} human-friendly schedule
 */
export function formatWorkingHours(schedule) {
  const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const resultSchedule = [];
  const scheduleCopy = JSON.parse(JSON.stringify(schedule));
  scheduleCopy.sort((a, b) => week.indexOf(a.day) - week.indexOf(b.day));
  let start = 0;
  for (let i = 0; i < scheduleCopy.length; i++) {
    if (i === scheduleCopy.length - 1 || scheduleCopy[start].from +
    scheduleCopy[start].to !== scheduleCopy[i + 1].from +
    scheduleCopy[i + 1].to) {
      if (start === i) {
        resultSchedule.push(scheduleCopy[i].day.toUpperCase() + ': ' +
        scheduleCopy[i].from + ' - ' + scheduleCopy[i].to);
      } else {
        resultSchedule.push(scheduleCopy[start].day.toUpperCase() + ' - ' +
        scheduleCopy[i].day.toUpperCase() + ': ' + scheduleCopy[start].from +
        ' - ' + scheduleCopy[i].to);
      }
      start = i + 1;
    }
  }
  return resultSchedule;
}
