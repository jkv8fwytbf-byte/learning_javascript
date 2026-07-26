// Enumerating: walk through an object's keys (and values).

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  console.log(key, circle[key]);
}

for (let key of Object.keys(circle)) {
  console.log(key);
}

for (let entry of Object.entries(circle)) {
  console.log(entry);
}

if ("radius" in circle) console.log("yes");

// Try it:
// - Log every key and value with for...in
// - Use Object.keys and the `in` operator
