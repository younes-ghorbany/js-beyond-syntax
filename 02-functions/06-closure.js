/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 06 - Closure
 * CHAPTER: 02 - Functions
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

/**
 * CLOSURE
 * A function that remembers the variables from the scope
 * where it was created — even after that scope is gone.
 */

function outer() {
  let secret = "I'm vegan"; // lives inside outer's scope

  function inner() {
    console.log(secret); // still reachable here — that's closure
  }

  return inner; // returned, not called
}

// outer() is done executing at this point...
const revealSecret = outer();

// ...yet `secret` is alive and well. Closure at work
revealSecret(); // "I'm vegan"

/**
 * REACT & CLOSURES
 * useState relies on closures:
 * each render "captures" its own `count`,
 * and `setCount` knows exactly which state it owns.
 */

const [count, setCount] = useState(0);
