// Every object has a constructor property: the function that created it.

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = createCircle(1);
// const another = new Circle(1);

// console.log(circle.constructor);   // Object
// console.log(another.constructor);  // Circle

// Try it:
// - Log .constructor for both objects above
// - Check: console.log(another.constructor === Circle)
