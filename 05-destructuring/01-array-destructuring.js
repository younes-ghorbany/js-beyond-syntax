/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  01 - Array Destructuring
 * CHAPTER: 05 - Destructuring, Spread && Rest
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// Old ways
const colors = ["red", "green", "blue"];
// const colors = ["red", "green", "blue", "yellow"];
// const first = colors[0];
// const second = colors[1];

// Modern ways
// const [first, second, third] = colors;
const [first, , third] = colors; //We can skip using this method
console.log(first);
// console.log(second);
console.log(third);

// Default valut
const [a, b, c, d = "purple"] = colors;
console.log(d);

// React usage
// const [count, setCount] = useState(0);
