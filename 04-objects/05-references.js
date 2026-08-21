/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  05 - References
 * CHAPTER: 04 - Objects
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// ---------------------------------------------
// The big idea: a variable never holds an object.
// It holds an ADDRESS (reference) to the object.
// So `===` on objects compares ADDRESSES — never content.
// ---------------------------------------------

// Two objects with identical content...
// but two separate addresses in memory
const a = { name: "Ali" };
const b = { name: "Ali" };

console.log(a === b); // false — same content, different houses

// ---------------------------------------------
// Assignment does NOT create a new object.
// It only copies the ADDRESS → x and y now
// point to the SAME object in memory.
// ---------------------------------------------
const x = { name: "Reza" };
const y = x;

console.log(a === b); // true — one object, two labels

// Mutating through "y" changes "x" too —
// because a second object never existed
y.name = "Younes";
console.log(x.name); // "Younes" we never touched x, yet it changed

// ---------------------------------------------
// Arrays are objects too — same rules apply
// ---------------------------------------------
const list = [1, 2, 3];
const copy = list; // ❌ NOT a copy — same address, new label

copy.push(4);
console.log(list); // [1,2,3,4] — "list" and "copy" are the same array

// 💡 React takeaway: React detects state changes by comparing
// REFERENCES (Object.is), not content. Same address = no re-render.
// That's exactly why lesson 03 taught us to build NEW objects/arrays.
