exports._check = (val) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  if (typeof val !== 'number') {
    throw new TypeError(`${val} is not a number`);
  }
};

exports.add = (x, y) => {
  exports._check(x)
  exports._check(y)
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x)
  exports._check(y)
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x)
  exports._check(y)
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x)
  exports._check(y)
  return x / y;
};

module.exports = exports;
