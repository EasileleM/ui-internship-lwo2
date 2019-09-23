export class Person {
  constructor(fullName) {
    [this._firstName, this._lastName] = fullName.split(' ');
  }
  getFirstName() {
    return this._firstName;
  }
  getLastName() {
    return this._lastName;
  }
  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }
  setFirstName(firstName) {
    this._firstName = firstName;
  }
  setLastName(lastName) {
    this._lastName = lastName;
  }
  setFullName(fullName) {
    [this._firstName, this._lastName] = fullName.split(' ');
  }
}
