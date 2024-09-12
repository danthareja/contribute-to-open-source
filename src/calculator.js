// DRY up the codebase with this function
exports._check = (x, y) => {
  // Check if both x and y are numbers
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};

// Refactor the add function to use _check
exports.add = (x, y) => {
  exports._check(x, y); // Call _check to validate the inputs
  return x + y;
};

// Refactor the subtract function to use _check
exports.subtract = (x, y) => {
  exports._check(x, y); // Call _check to validate the inputs
  return x - y;
};

// Refactor the multiply function to use _check
exports.multiply = (x, y) => {
  exports._check(x, y); // Call _check to validate the inputs
  return x * y;
};

// Refactor the divide function to use _check
exports.divide = (x, y) => {
  exports._check(x, y); // Call _check to validate the inputs
  return x / y;
};

module.exports = exports;

