// Private members: use local variables (closure) so outsiders can't touch them.

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function (factor) {
    console.log("computing...", factor);
  };

  this.draw = function () {
    computeOptimumLocation(0.1);
    console.log("draw");
    console.log(defaultLocation);
  };
}

const circle = new Circle(10);
circle.draw();

console.log(circle.defaultLocation); // undefined — private
// circle.computeOptimumLocation(0.1); // would throw — not on the object

// Try it:
// - Log Object.keys(circle) — only public members show up
// - Add another private let (e.g. color) and use it inside draw
