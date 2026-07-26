// Multilevel inheritance: instance -> Circle.prototype -> Object.prototype -> null

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const circle = new Circle(1);

console.log(Object.getPrototypeOf(circle) === Circle.prototype); // true
console.log(Object.getPrototypeOf(Circle.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null

// Property lookup walks the chain:
circle.draw(); // on Circle.prototype
console.log(circle.toString()); // on Object.prototype

// Try it:
// - Log Object.getPrototypeOf(circle) a few times up the chain
// - Add Circle.prototype.move and call it from circle
