// Prototypical inheritance: objects inherit from other objects via a prototype.

const parent = {
  toString() {
    return "parent";
  },
};

const child = Object.create(parent);
child.name = "child";

console.log(Object.getPrototypeOf(child) === parent); // true
console.log(child.toString()); // found on parent via the prototype chain
console.log(child.name); // own property

// When you read a property:
// 1. Look on the object itself
// 2. If missing, look on its prototype
// 3. Keep going up until found or null

// Try it:
// - Add a property on parent (e.g. color) and read it from child
// - Override toString on child and call it again
