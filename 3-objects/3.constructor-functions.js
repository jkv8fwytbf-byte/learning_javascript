// Constructor: PascalCase name + call with `new`.
// new does: 1) empty object as this  2) run body  3) return this

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);
console.log(circle1);
console.log(circle2);

// Try it:
// - Call draw on circle1
// - Compare this file to 2.factory-functions.js (same idea, different style)
