/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  01 - Nested Objects
 * CHAPTER: 04 - Objects
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// A flat simple object
// const user = {
//   name: "Younes",
//   age: 34,
// };

// ---------------------------------------------
// Example 01: Objects inside objects (and arrays too)
// Real-world data (APIs, DBs) is almost never flat
// ---------------------------------------------
const user = {
  name: "Younes",
  address: {
    city: "Tehran",
    country: "Iran",
  },
  skills: ["Javascript", "React", "Next.js", "Typescipt"],
};

// Chain the dots
console.log(user.address.city); // "Tehran"
console.log(user.address.country); // "Iran"

console.log(user.skills[0]); // "Javascript"

// ---------------------------------------------
// Example 02: Array of objects — THE most common
// shape in React (think: rendering lists with .map)
// ---------------------------------------------
const user02 = {
  name: "Younes",
  courses: [
    { id: 1, title: "JS for React", students: 120 },
    { id: 2, title: "TS from Zero", students: 138 },
  ],
};

// Pick the item by index first, then access its property
console.log(user02.courses[1].title); // "TS from Zero"
console.log(user02.courses[0].students); // 120

// ---------------------------------------------
// ⚠️ The classic trap: accessing a path that doesn't exist
// ---------------------------------------------

// user02.job is undefined → reading .title on undefined CRASHES
// console.log(user02.job.title); // ❌ TypeError: Cannot read properties of undefined

// This is what actually happens under the hood:
// undefined.title

// ✅ Optional Chaining to the rescue:
// if the left side is null/undefined, stop and return undefined — no crash
console.log(user02.job?.title);

// ---------------------------------------------
// ⚠️ Important: nested objects are REFERENCES, not copies
// ---------------------------------------------

// "addr" is NOT a copy — it points to the SAME address object
const addr = user.address;

// Mutating through one reference...
addr.city = "Gonbad";

// ...is visible through the other. Same object, same memory!
console.log(user.address.city); // "Gonbad"
