/**
 * populateTable - creates a table form given array
 * of objects and appends it to element body of the document
 * @param {Object[]} objects
 */
export function populateTable(objects) {
  // eslint-disable-next-line no-undef
  const table = document.createElement('table');
  let resultInTable = '<thead><tr>';
  for (const prop in objects[0]) {
    if (objects[0].hasOwnProperty(prop)) {
      resultInTable += '<th>' + prop + '</th>';
    }
  }
  resultInTable += '</tr></thead><tbody>';
  for (const object of objects) {
    if (object.isWorkExperience) {
      resultInTable += '<tr>';
    } else {
      resultInTable += '<tr style="background:#f6f8fa;">';
    }
    for (const prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (prop === 'isWorkExperience') {
          if (object[prop]) {
            resultInTable += '<td>yes</td>';
          }
          resultInTable += '<td>no</td>';
        } else {
          resultInTable += '<td>' + object[prop] + '</td>';
        }
      }
    }
    resultInTable += '</tr>';
  }
  resultInTable += '</tbody>';
  table.innerHTML = resultInTable;
  // eslint-disable-next-line no-undef
  document.body.appendChild(table);
}
