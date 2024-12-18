exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

// The helper function to check if inputs are numbers
exports._check = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};

// Add function using _check
exports.add = (x, y) => {
  exports._check(x, y); // Check inputs
  return x + y;
};

// Subtract function using _check
exports.subtract = (x, y) => {
  exports._check(x, y); // Check inputs
  return x - y;
};

// Multiply function using _check
exports.multiply = (x, y) => {
  exports._check(x, y); // Check inputs
  return x * y;
};

// Divide function using _check
exports.divide = (x, y) => {
  exports._check(x, y); // Check inputs
  return x / y;
};


exports.square = (x) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  return x * x;
};


exports.square = (y) => {
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return y * y;
};


module.exports = exports;
