/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 08 - Ternary Operator in UI Logic
 * CHAPTER: 01 - Essential but Deep Foundations
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// -------------------------------------
// Basic Syntax
// condition ? valueIfTrue : valueIfFalse
// -------------------------------------

const age = 16;
const message = age >= 18 ? "You can enter" : "You cannot enter";

console.log(message); // You cannot enter

// -------------------------------------
// Statement (if/else) vs Expression (Ternary)
// -------------------------------------

// ❌ This is a syntax error! if/else doesn't return a value.
// const result = if (isLoggedIn) { "Welcome" } else { "Login" };

// ✅ Ternary is an expression; it produces a value and can be assigned.
const isLoggedIn = true;
const welcomeMsg = isLoggedIn ? "Welcome back!" : "Please log in";

// -------------------------------------
// Versatility: Used in Functions, Logs, and Objects
// -------------------------------------

const isOnline = true;

// In return statements
function getAccessMessage(isAdmin) {
  return isAdmin ? "Access granted" : "Access denied";
}

// Inside console logs
console.log(`Status: ${isOnline ? "Online" : "Offline"}`);

// Inside Object literals (Super useful in state mapping)
const user = {
  name: "Younes",
  status: isOnline ? "Active" : "Inactive",
};

// -------------------------------------
// Best Practices & Anti-patterns
// -------------------------------------

const userAge = 20;

// ❌ Bad Habit: Unnecessary ternary for booleans
const isAdultBad = userAge >= 18 ? true : false;

// ✅ Clean Way: The comparison itself returns true/false
const isAdultClean = userAge >= 18;

const items = [];
// ✅ Use the logic directly instead of ternary if you just need a boolean
const isEmpty = items.length === 0;

// -------------------------------------
// Nested Ternary (Use with caution!)
// Great for UI states (Loading -> Error -> Data)
// -------------------------------------

const score = 65;

const grade =
  score >= 70
    ? "Excellent"
    : score >= 60
      ? "Good"
      : score >= 50
        ? "Pass"
        : "Fail";

console.log(grade); // Good
