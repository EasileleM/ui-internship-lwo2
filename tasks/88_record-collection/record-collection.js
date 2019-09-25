let collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': [
      '1999',
      'Little Red Corvette',
    ],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};

/**
 * updateRecords - takes an album's id, a property prop ('artist' or 'tracks'),
 * and a value to modify the data in outer object - collection, which contains
 * sub-objects with musical album info. If prop isn't 'tracks' and value isn't
 * empty, set the value for that record album's property. If prop is 'tracks'
 * but the album doesn't have a 'tracks' property, creates an empty
 * array before adding the new value to the album's corresponding property.
 * If prop is 'tracks' and value isn't empty, pushes the *value* onto the end
 * of the album's existing 'tracks' array. If value is empty, delete the
 * given prop property from the album.
 * @example
 * // return collection
 * // property in collection with name 5439
 * // should have property 'artist' with value 'ABBA'
 * updateRecords(5439, "artist", 'ABBA')
 * @param {string} id of album
 * @param {string} prop of album
 * @param {string} value of prop
 * @return {Object} entire collection object
 */
export function updateRecords(id, prop, value) {
  if (prop !== 'tracks') {
    if (value !== '') {
      collection[id][prop] = value;
    } else {
      delete collection[id][prop];
    }
  } else {
    if (!collection[id].hasOwnProperty(prop)) {
      collection[id][prop] = [];
    }
    if (value !== '') {
      collection[id][prop].push(value);
    } else {
      delete collection[id][prop];
    }
  }
  return collection;
}
