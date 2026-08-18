/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 06 - Flat
 * CHAPTER: 03 - Arrays
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// ============================================================
// Example 01: Basic flat()
// flat() unwraps nested arrays into a single level.
// By default it only flattens ONE level deep — pass a depth
// argument to go deeper.
// ============================================================

const numbers = [1, 2, [3, 4], [5, [6, 7]]];

console.log(numbers.flat(2)); // [1, 2, 3, 4, 5, 6, 7]

// ============================================================
// Example 02: Real-world use case — combining grouped data
// Flatten grouped scores first, then calculate the overall
// average using reduce().
// ============================================================

const classScores = [
  [17, 19, 20], // Class A
  [15, 18], // Class B
  [16, 20, 14], // Class C
];

// flat() merges all class scores into one flat array
const allScores = classScores.flat();
// [17, 19, 20, 15, 18, 16, 20, 14]

// reduce() sums all scores, then we divide by the total count
const average =
  allScores.reduce((sum, score) => sum + score, 0) / allScores.length;

console.log(allScores);
console.log(average);

// ============================================================
// flat(Infinity): unknown nesting depth
// When you don't know how deep the nesting goes,
// Infinity flattens ALL levels — no matter how deep.
// ============================================================

const res01 = [1, [2, [3, [4, [5]]]]];

console.log(res01.flat(Infinity)); // [1, 2, 3, 4, 5]

// ============================================================
// flat() removes empty slots (holes)
// ============================================================

const res02 = [1, , 3, , 5];

console.log(res02.flat()); // [1, 3, 5]

// ============================================================
// flatMap(): map() + flat(1) in a single pass
// Cleaner and more efficient than calling map().flat()
// separately. Note: flatMap() only flattens ONE level.
// ============================================================

const words = ["i Love React", "flat is cool"];

// map() alone returns nested arrays:
console.log(words.map((w) => w.split(" ")));
// [["i", "Love", "React"], ["flat", "is", "cool"]]

// flatMap() maps and flattens in one step:
console.log(words.flatMap((w) => w.split(" ")));
// ["i", "Love", "React", "flat", "is", "cool"]
