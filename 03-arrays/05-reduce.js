/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 05 - Reduce
 * CHAPTER: 03 - Arrays
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// Example 01

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(sum); // 10

// 1 -> accumulator = 0, current = 1 -> 1
// 2 -> accumulator = 1, current = 2 -> 3
// 3 -> accumulator = 3, current = 3 -> 6
// 4 -> accumulator = 6, current = 4 -> 10

// Example 02 -> cart

const cart = [
  { id: 1, name: "laptop", price: 50000000 },
  { id: 2, name: "keyboard", price: 22000000 },
  { id: 3, name: "monitor", price: 77000000 },
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total); // 149000000

// Example 03 -> reduce can return objects

const votes = ["react", "vue", "react", "react", "vue"];

const result = votes.reduce((counts, vote) => {
  counts[vote] = (counts[vote] || 0) + 1;
  return counts;
}, {});

console.log(result);
