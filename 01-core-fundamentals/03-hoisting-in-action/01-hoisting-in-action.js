/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 05 - Hoisting in Action
 * CHAPTER: 01 - Essential but Deep Foundations
 * Course: JS for React && Next.js: Beyond Syntax
 */

// -------------------------------------
// var: declaration is hoisted, value is not
// -------------------------------------

console.log(username); // undefined
// JavaScript hoists the declaration of `username`,
// but its assignment happens later.

var username = "Younes";

// The engine roughly sees it like this:
//
// var username;
// console.log(username); // undefined
// username = "Younes";

// -------------------------------------
// A common problem with var
// -------------------------------------

if (!userRole) {
  console.log("Role is missing");
  // This runs because `userRole` exists as `undefined`
  // before the assignment line is reached.
}

var userRole = "admin";

// -------------------------------------
// let: hoisted too, but not initialized
// Access before declaration => ReferenceError
// -------------------------------------

// console.log(age); // ReferenceError
// let age = 25;

// -------------------------------------
// const: same TDZ behavior as let
// Access before declaration => ReferenceError
// -------------------------------------

// console.log(courseName); // ReferenceError
// const courseName = "JavaScript for React";

// -------------------------------------
// TDZ (Temporal Dead Zone)
// From the start of the block until declaration
// -------------------------------------

// {
//   // `score` is in the Temporal Dead Zone here.
//   console.log(score); // ReferenceError
//
//   let score = 100;
//
//   console.log(score); // 100
// }

// -------------------------------------
// let without initial value
// After declaration, it becomes accessible
// -------------------------------------

let score;

console.log(score); // undefined

// Different case:
// Accessing before declaration throws an error.
//
// console.log(score); // ReferenceError
// let score;

// -------------------------------------
// Function Declaration
// Fully hoisted, so it can be called before definition
// -------------------------------------

sayHello();

function sayHello() {
  console.log("Hello!");
}

// -------------------------------------
// Function Expression
// The variable exists only after initialization
// -------------------------------------

// sayHi(); // ReferenceError
//
// const sayHi = function () {
//   console.log("Hi!");
// };

// -------------------------------------
// Arrow Function
// Same rule as function expressions
// -------------------------------------

// sayHi2(); // ReferenceError
//
// const sayHi2 = () => {
//   console.log("Hi2");
// };

// -------------------------------------
// Function Expression with var
// `var` is hoisted as undefined, not as a function
// -------------------------------------

sayJump(); // TypeError: sayJump is not a function

var sayJump = function () {
  console.log("JUMP");
};

// What happens conceptually:
//
// var sayJump;
// sayJump(); // undefined() => TypeError
// sayJump = function () {
//   console.log("JUMP");
// };

// -------------------------------------
// Real-world example
// In React, handlers are often written with const.
// So they cannot be used before declaration.
// -------------------------------------

const handleClick = () => {
  console.log("Clicked");
};
