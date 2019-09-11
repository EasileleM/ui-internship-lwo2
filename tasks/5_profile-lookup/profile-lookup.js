const contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin'],
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['Javascript', 'Gaming', 'Foxes'],
  },
];

export function lookupProfile(firstName, prop) {
  const contact = contacts.find((cont) => cont.firstName === firstName);
  if (contact === undefined) {
    return 'No such contact';
  }
  if (contact.hasOwnProperty(prop)) {
    return contact[prop];
  }
  return 'No such property';
}
