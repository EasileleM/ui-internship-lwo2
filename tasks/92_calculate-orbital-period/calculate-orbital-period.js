/**
 * orbitalPeriod - return a new array that transforms the
 * element's average altitude into their orbital periods.
 * @param {Object[]} bodies
 * @return {Object[]}
 */
export function orbitalPeriod(bodies) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  const PI = 3.14159265359;
  const bodiesCopy = JSON.parse(JSON.stringify(bodies));
  for (const body of bodiesCopy) {
    const distance = body.avgAlt + EARTH_RADIUS;
    body.orbitalPeriod = Math
        .round(2 * PI * Math.sqrt(Math.pow(distance, 3) / GM));
    delete body.avgAlt;
  }
  return bodiesCopy;
}
