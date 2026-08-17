/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 05 - Pure Functions
 * CHAPTER: 02 - Functions
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// ✅ Pure — same input, same output. Always.
const add = (a, b) => a + b;

// ❌ Impure — depends on an external variable
let total = 0;
const addToTotal = (amount) => {
  total += amount;
  return total;
};

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 — same input, different output!

// ❌ Impure — mutates the original array (mutation)
const addItem = (arr, item) => {
  arr.push(item);
  return arr;
};

// ✅ Pure — creates a new array, original stays untouched
const addItemPure = (arr, item) => [...arr, item];

// Spread Operator
