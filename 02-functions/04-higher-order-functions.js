/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 04 - Higher Order Functions
 * CHAPTER: 02 - Functions
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// -------------------------------------
// Higher-Order Function (HOF)
// A function that returns another function.
// -------------------------------------

const createMultiplier = (factor) => {
  return (number) => number * factor;
};

// Closures capture the `factor` passed at creation time.
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// -------------------------------------
// HOFs Everywhere in React
// -------------------------------------

// map, filter, reduce -> all HOF
// useState -> setter -> HOF
// HOC -> HOF
