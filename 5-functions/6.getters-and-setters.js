// Getters and setters: methods that look like properties (get / set).

const person = {
  firstName: "Siddharth",
  lastName: "K",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(person.fullName); // getter
person.fullName = "John Smith"; // setter
console.log(person);

// Try it:
// - Add a getter for fullName and log it (no parentheses)
// - Use the setter to change firstName and lastName together
