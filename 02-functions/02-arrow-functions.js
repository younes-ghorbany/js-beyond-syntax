/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 02 - Arrow Functions
 * CHAPTER: 02 - Functions
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// -------------------------------------
// Regular Function
// Classic function expression with explicit `return`.
// -------------------------------------

const add = function (a, b) {
  return a + b;
};

// -------------------------------------
// Arrow Function
// Syntactic sugar: still a function, but shorter.
// -------------------------------------

const add2 = (a, b) => {
  return a + b;
};

// Implicit return: no braces, no `return` keyword.
const add3 = (a, b) => a + b;

// -------------------------------------
// Returning an Object Literal
// Braces are read as a function body, not an object.
// -------------------------------------

// ❌ Error: interpreted as a block with a label, returns undefined.
const makeUser = (name) => {
  name: name;
};

// ✅ Wrap the object in parentheses for an implicit object return.
const makeUser2 = (name) => ({ name: name });

// -------------------------------------
// Arrow Functions in React
// Perfect for inline callbacks and concise transformations.
// -------------------------------------

const handleClick = () => {
  console.log("Clicked");
};

const names = ["Younes", "Amir", "Ali"];
const greetings = names.map((name) => `Hello ${name}`);
