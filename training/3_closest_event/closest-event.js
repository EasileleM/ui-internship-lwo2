/**
 * closestEvent - return name of the closest
 * to given target date event
 * @param {Object[]} events
 * @param {Object} targetDate Date object
 * @return {strign}
 */
export function closestEvent(events, targetDate) {
  let closestEvent = events.reduce((closest, event) => {
    const eventDate = new Date(event.date);
    const closestDate = new Date(closest.date);
    const diffWithEvent = Math.abs(eventDate - targetDate);
    const diffWithClosest = Math.abs(closestDate - targetDate);
    if (diffWithEvent < diffWithClosest) {
      return event;
    } else {
      return closest;
    }
  });
  return closestEvent.name;
}
