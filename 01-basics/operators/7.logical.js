// Logical operators with booleans: && (and), || (or), ! (not).

const isHighIncome = true;
const hasGoodCredit = true;
const hasCriminalRecord = false;

const eligible = isHighIncome && hasGoodCredit;
console.log("eligible (&&):", eligible);

const approved = (isHighIncome || hasGoodCredit) && !hasCriminalRecord;
console.log("approved:", approved);

console.log("!true =", !true);
console.log("!false =", !false);

// Try it:
// - Change hasCriminalRecord to true and see approved flip.
