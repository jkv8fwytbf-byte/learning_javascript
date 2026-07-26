// Instance members live on each object; prototype members are shared.

function Circle(radius) {
  // instance member — unique per circle
  this.radius = radius;
}

// prototype member — one shared function for all circles
Circle.prototype.draw = function () {
  console.log("draw", this.radius);
};

const c1 = new Circle(1);
const c2 = new Circle(2);

c1.draw();
c2.draw();

console.log(c1.draw === c2.draw); // true — same function on the prototype
console.log(c1.radius === c2.radius); // false — different instance data

// Try it:
// - Add Circle.prototype.move and call it on c1 and c2
// - Put a method on this inside the constructor and compare c1.method === c2.method
