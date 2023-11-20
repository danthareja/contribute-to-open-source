exports._check = (a, b) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here?
  // Then, invoke this function inside each of the others
  if (typeof a !== "number") {
    throw new TypeError(`First parameter is not a number`);
  }
  if (typeof b !== "number") {
    throw new TypeError(`Second Parameter is not a number`);
  }

  // HINT: you can invoke this function with exports._check()
};

exports.add = (x, y) => {
  exports._check(x, y);
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x, y);
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x, y);
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x, y);
  return x / y;
};

module.exports = exports;
