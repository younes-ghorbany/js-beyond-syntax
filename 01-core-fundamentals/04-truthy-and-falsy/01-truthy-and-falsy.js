/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 06 - Truthy And Falsy in Javascript
 * CHAPTER: 01 - Essential but Deep Foundations
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// -------------------------------------
// ToBoolean
// -------------------------------------

// JavaScript converts values to boolean in conditions.
if ("Hello") {
  console.log("This runs");
}

if ("") {
  console.log("This does not run");
}

console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean(10)); // true
console.log(Boolean(0)); // false
console.log(Boolean([])); // true

console.log(!!"Hello"); // true
console.log(!!0); // false

// -------------------------------------
// Falsy values in JavaScript
// -------------------------------------

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Everything else is truthy.
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
console.log(Boolean(" ")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true

// -------------------------------------
// Truthy does not always mean "valid"
// -------------------------------------

console.log(typeof 0); // number
console.log(typeof "0"); // string

console.log(typeof false); // boolean
console.log(typeof "false"); // string

// -------------------------------------
// Real checks for common values
// -------------------------------------

const username = "   ";

if (username) {
  console.log("Username exists");
}

if (username.trim().length > 0) {
  console.log("Username is valid");
} else {
  console.log("Username is empty");
}

const products = [];

if (products) {
  console.log("Products exist");
}

if (products.length > 0) {
  console.log("Products available");
} else {
  console.log("Product list is empty");
}

const user = {};

if (user) {
  console.log("User exists");
}

if (Object.keys(user).length > 0) {
  console.log("User data exists");
} else {
  console.log("User data is empty");
}

const price = 0;

if (price) {
  console.log(`Price: ${price}`);
}

if (price !== null && price !== undefined) {
  console.log(`Price: ${price}`);
} else {
  console.log("Price unavailable");
}

// -------------------------------------
// Short-circuit examples
// -------------------------------------

// Render only when the condition is truthy.
isLoggedIn && "Dashboard";

// Render product list only if there are items.
products.length && "Render product list";
