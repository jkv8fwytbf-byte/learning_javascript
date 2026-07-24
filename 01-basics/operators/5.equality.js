// Equality: prefer === (strict). It checks value AND type.
// == does type conversion first — usually surprising.

console.log("1 === 1 =", 1 === 1); // true
console.log("1 === '1' =", 1 === "1"); // false (number vs string)
console.log("1 == '1' =", 1 == "1"); // true (loose — avoid)

console.log("1 !== '1' =", 1 !== "1"); // true

console.log("true === 1 =", true === 1); // false
console.log("true == 1 =", true == 1); // true (loose)

// Try it:
// - Log 0 === false and 0 == false. Notice the difference.
