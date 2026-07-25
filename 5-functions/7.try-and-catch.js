// Try and catch: handle errors so one bad value doesn't crash the whole program.

const person = {
  firstName: "Siddharth",
  lastName: "K",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");
    const parts = value.split(" ");
    if (parts.length < 2) throw new Error("Enter a first and last name.");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = null;
} catch (e) {
  console.log(e);
}

// Try it:
// - Throw an Error when fullName is not a string
// - Wrap the assignment in try/catch and log the error message
