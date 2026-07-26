// Abstraction: hide the messy details; expose a simple public interface.

function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function (factor) {
    // pretend this is complex logic the outside world shouldn't see
    console.log("computing...", factor);
  };

  this.draw = function () {
    this.computeOptimumLocation(0.1);
    console.log("draw");
  };
}

const circle = new Circle(10);
circle.draw();

// Problem: everything is public — caller can mess with internals:
circle.computeOptimumLocation(0.1);
circle.defaultLocation = false;

console.log(circle);

// Next lesson: make defaultLocation and computeOptimumLocation private.

// Try it:
// - Call only draw() and ignore the internals
// - Notice how easy it is to break the object by changing defaultLocation
