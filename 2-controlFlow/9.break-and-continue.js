// Break: leave the loop early.
// Continue: skip this iteration and go to the next one.

for (let i = 0; i < 10; i++) {
  if (i === 5) break;      // stop completely when i is 5
  if (i % 2 === 0) continue; // skip even numbers
  console.log(i);
}

// Try it:
// - Use break to stop a loop when you find a value
// - Use continue to print only odd numbers from 0 to 10
