// For...in: loop over the keys (property names) of an object.

const person = {
  name: "Siddharth",
  age: 30,
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

// Try it:
// - Log each key and value from person
// - Notice that for...in on arrays gives indexes (as strings)
