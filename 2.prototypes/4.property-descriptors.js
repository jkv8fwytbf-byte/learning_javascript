// Property descriptors: every property has flags (writable, enumerable, configurable).

const person = { name: "Siddharth" };

const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);
// { value, writable: true, enumerable: true, configurable: true }

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});

person.name = "John"; // ignored in non-strict mode
console.log(person.name); // still "Siddharth"

// Built-in methods are often non-enumerable:
const toStringDescriptor = Object.getOwnPropertyDescriptor(
  Object.prototype,
  "toString"
);
console.log(toStringDescriptor.enumerable); // false — that's why for...in skips it

// Try it:
// - Make a property non-enumerable and loop with for...in
// - Inspect Object.getOwnPropertyDescriptor(person, "name") again
