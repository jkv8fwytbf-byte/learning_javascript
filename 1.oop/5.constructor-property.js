

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = createCircle(1);
const another = new Circle(1);

console.log(circle.constructor); // Object
console.log(another.constructor); // Circle
console.log(another.constructor === Circle); // true
