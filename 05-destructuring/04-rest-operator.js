/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON:  04 - Rest Operator
 * CHAPTER: 05 - Destructuring, Spread && Rest
 * COURSE:  JS for React && Next.js: Beyond Syntax (by Younes Ghorbany)
 */

// Function Parameters

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);
console.log(second);
console.log(rest);

// Object
const user = {
  name: "Younes",
  age: 34,
  role: "admin",
};

const { name, age, ...otherInfo } = user;
console.log(otherInfo);

// React usage

// function Button({ onClick, children, ...rest }) {
//   return (
//     <button onClick={onClick} {...rest}>
//       {children}
//     </button>
//   );
// }
