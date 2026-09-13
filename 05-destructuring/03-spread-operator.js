/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  03 - Spread Operator
 * CHAPTER: 05 - Destructuring, Spread && Rest
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// Arrays

const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "date", ...fruits];
console.log(moreFruits);

// Copy array

const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original);

// Combine
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1,2,3,4]

// Object

const user = { name: "Younes", age: 34 };
const updatedUser = { ...user, age: 26 };

// React usage
// setState((prevState) => ({ ...prevState, name: "Reza" }));
//
// function Wrapper(props) {
//   return <Button {...props} />;
// }
