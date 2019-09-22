export class Person {
  constructor(fullName) {
    const fullNameSplit = fullName.split(' ');
    let firstName = fullNameSplit[0];
    let lastName = fullNameSplit[1];
    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };
    this.setFirstName = function(firstNameInput) {
      firstName = firstNameInput;
    };
    this.setLastName = function(lastNameInput) {
      lastName = lastNameInput;
    };
    this.setFullName = function(fullNameInput) {
      const fullNameSplit = fullNameInput.split(' ');
      firstName = fullNameSplit[0];
      lastName = fullNameSplit[1];
    };
  }
}
