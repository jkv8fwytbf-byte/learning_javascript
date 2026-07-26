// Inheritance: reuse code instead of copying the same methods everywhere.

// Without inheritance — duplicated methods:
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  this.duplicate = function () {
    console.log("duplicate");
  };
}

function Square(size) {
  this.size = size;
  this.draw = function () {
    console.log("draw");
  };
  this.duplicate = function () {
    console.log("duplicate");
  };
}

const circle = new Circle(1);
const square = new Square(1);
circle.draw();
square.duplicate();

// Inheritance idea: share common behavior (draw / duplicate)
// through a parent prototype instead of rewriting it.
// Next lessons show how JavaScript does this with prototypes.

// Try it:
// - Notice draw and duplicate exist on both constructors
// - Think: where would "shared" code live if we had one parent Shape?
