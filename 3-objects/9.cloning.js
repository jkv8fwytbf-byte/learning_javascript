// Cloning: copy an object's properties into a new object.

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// const another = Object.assign({}, circle);
// const another = { ...circle }; // spread (same idea)

// console.log(another);

// Try it:
// - Clone circle with Object.assign into a new empty object
// - Clone again with the spread operator { ...circle }
