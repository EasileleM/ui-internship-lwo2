/**
 * nbMonths - return how many month someone should
 * save money to buy new car with selling old car.
 * @example
 * // return [6, 766]
 * nbMonths(2000, 8000, 1000, 1.5)
 * @param {number} startPriceOld start price of old car
 * @param {number} startPriceNew start price of new car
 * @param {number} savePerMonth money save per month
 * @param {number} persentLossPerMonth
 * @return {Array} [monthToBuy, moneyLeft]
 */
export function nbMonths(startPriceOld, startPriceNew,
    savePerMonth, persentLossPerMonth) {
  let currPriceOld = startPriceOld;
  let currPriceNew = startPriceNew;
  let currPersentLossPerMonth = persentLossPerMonth;
  let moneyToBuy = startPriceNew - startPriceOld;
  let moneySaved = 0;
  let monthAmount = 0;
  while (moneyToBuy > 0) {
    currPriceOld *= (100 - currPersentLossPerMonth) / 100;
    currPriceNew *= (100 - currPersentLossPerMonth) / 100;
    if (!(monthAmount % 2)) {
      currPersentLossPerMonth += 0.5;
    }
    moneySaved += savePerMonth;
    monthAmount++;
    moneyToBuy = currPriceNew - currPriceOld - moneySaved;
  }
  return [monthAmount, Math.floor(-moneyToBuy)];
}
