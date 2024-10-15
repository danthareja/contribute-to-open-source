// Define the _check function to handle all type-checking
exports._check = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};

// Use _check in the arithmetic functions
exports.add = (x, y) => {
  exports._check(x, y); // Call _check to validate the inputs
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x, y); // Call _check to validate the inputs
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x, y); // Call _check to validate the inputs
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x, y); // Call _check to validate the inputs
  if (y === 0) {
    throw new Error('Cannot divide by zero');
  }
  return x / y;
};

module.exports = exports;
