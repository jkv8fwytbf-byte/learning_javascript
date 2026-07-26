// Objects are dynamic: you can add, change, or delete properties later.

const circle = {
  radius: 1,
};

circle.color = "yellow";
circle.draw = function () {
  console.log("draw");
};

console.log(circle);
circle.draw();

delete circle.color;
delete circle.draw;

console.log(circle);

// Try it:
// - Add a location property, then delete it
// - Add a method, call it, then delete it
