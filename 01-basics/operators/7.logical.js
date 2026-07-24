// Logical operators with booleans: && (and), || (or), ! (not).

const isHighIncome = true;
const hasGoodCredit = true;
const hasCriminalRecord = false;

const eligible = isHighIncome && hasGoodCredit;
console.log(eligible);

const approved = (isHighIncome || hasGoodCredit) && !hasCriminalRecord;
console.log(approved);

console.log(!true);
console.log(!false);

// Try it:
// - Change hasCriminalRecord to true and see approved flip.
