// Constructor prototypes: every function has a .prototype used by `new`.

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

const circle = new Circle(1);

console.log(Circle.prototype);
console.log(Object.getPrototypeOf(circle) === Circle.prototype); // true
console.log(circle.constructor === Circle); // true (via Circle.prototype.constructor)

circle.draw();

// Try it:
// - Create another circle and check its prototype is the same object
// - Log circle.constructor and Circle.prototype.constructor
