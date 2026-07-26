// Getters and setters: methods that look like properties (get / set).

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value || typeof value.x !== "number" || typeof value.y !== "number")
        throw new Error("Invalid location.");
      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
console.log(circle.defaultLocation); // getter
circle.defaultLocation = { x: 1, y: 2 }; // setter
console.log(circle.defaultLocation);

// Object literal style:
const person = {
  firstName: "Siddharth",
  lastName: "K",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
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
// - Read circle.defaultLocation (no parentheses)
// - Try setting an invalid location and catch the error
