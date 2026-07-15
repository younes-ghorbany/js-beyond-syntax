/* eslint-disable no-unused-vars, no-constant-condition, no-console, no-empty, no-shadow */

/**
 * LESSON: 01 - Vanilla JS vs React JS
 * CHAPTER: 01 - Essential but Deep Foundations
 * Course: JS for React && Next.js: beyond syntax (by Younes Ghorbany)
 */

// --- IMPERATIVE ---
// Focuses on "how" to change the UI through direct state mutation

let isUserLoggedIn = false;

function updateButtonUI() {
  // Manual DOM updates based on external state
  if (isUserLoggedIn) {
    console.log("DOM Updated: Button text is now 'logout'");
  } else {
    console.log("DOM Updated: Button text is now 'login'");
  }
}

isUserLoggedIn = true;
updateButtonUI(); // Explicitly triggering the UI update

// --- DECLARATIVE ---
// Focuses on "what" the UI should look like based on state

const state = {
  isLoggedIn: true,
};

function ButtonComponent() {
  // Pure UI representation derived from state
  return state.isLoggedIn ? "Logout" : "Login";
}

console.log("UI Rendered:", ButtonComponent());
