// Value types (primitives) are copied by value; objects are copied by reference.

// Value types: Number, String, Boolean, Symbol, undefined, null, BigInt
let x = 10;
let y = x;
x = 20;
console.log(x); // 20
console.log(y); // 10  — y kept its own copy

// Reference types: Object, Array, Function
let a = { value: 10 };
let b = a;
a.value = 20;
console.log(a); // { value: 20 }
console.log(b); // { value: 20 } — same object in memory

function increase(number) {
  number++;
}

function increaseObj(obj) {
  obj.value++;
}

let number = 10;
increase(number);
console.log(number); // 10 — the function got a copy

let obj = { value: 10 };
increaseObj(obj);
console.log(obj); // { value: 11 } — the function got a reference

// Try it:
// - Change a.value again and log both a and b
// - Assign b = { value: 30 } and see if a changes
