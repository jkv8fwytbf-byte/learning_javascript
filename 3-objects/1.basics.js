// Object basics: a collection of related key/value pairs (properties).

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

console.log(circle.radius);        // dot notation
console.log(circle["location"]);  // bracket notation
circle.draw();

// Try it:
// - Add isVisible and a draw method, then call draw
// - Change radius with both dot and bracket notation
