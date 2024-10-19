// Utility function to DRY up the codebase by performing error checking
exports._check = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};

// Function to add two numbers
exports.add = (x, y) => {
  exports._check(x, y);  // Check if inputs are numbers
  return x + y;
};

// Function to subtract one number from another
exports.subtract = (x, y) => {
  exports._check(x, y);  // Check if inputs are numbers
  return x - y;
};

// Function to multiply two numbers
exports.multiply = (x, y) => {
  exports._check(x, y);  // Check if inputs are numbers
  return x * y;
};

// Function to divide one number by another
exports.divide = (x, y) => {
  exports._check(x, y);  // Check if inputs are numbers
  return x / y;
};

module.exports = exports;


// Improvements:
// Centralized Error Checking: The _check() function handles the type validation, so you don't need to repeat the same code in each mathematical function.
// Code Readability: Each function now focuses solely on its main task (addition, subtraction, etc.), making the code easier to understand.
// Reusability: The _check() function can be reused in future functions that need type validation.
// Comments: Added comments to explain the role of each function, which improves readability for other developers.
