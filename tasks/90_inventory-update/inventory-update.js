/**
 * updateInventory - compares and updates the inventory stored in a 2D
 * array against a second 2D array of a fresh delivery. Updates the
 * current existing inventory item quantities. If an item cannot be found,
 * adds the new item and quantity into the inventory array. The returned
 * inventory array will be in alphabetical order by item.
 * @param {Object[]} currentInventory
 * @param {Object[]} deliveryInventory
 * @return {Object[]} updated and sorted inventory
 */
export function updateInventory(currentInventory, deliveryInventory) {
  const result = JSON.parse(JSON.stringify(currentInventory));
  deliveryInventory.forEach((item) => {
    const itemIndex = result.findIndex((val) => item[1] === val[1]);
    if (itemIndex === -1) {
      result.push(item);
    } else {
      result[itemIndex] = [item[0] + result[itemIndex][0], item[1]];
    }
  });
  return result.sort((a, b) => a[1] < b[1] ? -1 : 1);
}
