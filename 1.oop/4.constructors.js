// Constructor: a function used with `new` to create an object.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

console.log(circle);
circle.draw();

// Try it:
// - Create another circle with new Circle(2)
// - What happens if you forget `new`? (try carefully and check the result)
