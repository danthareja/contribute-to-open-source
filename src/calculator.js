exports._check = (x, y) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  if (Number.isInteger(x) && Number.isInteger(y)) {
    // do nothing
  } else {
    throw new TypeError();
  }
};

exports.add = (x, y) => {
  this._check(x, y);
  return x + y;
};

exports.subtract = (x, y) => {
  this._check(x, y);
  return x - y;
};

exports.multiply = (x, y) => {
  this._check(x, y);
  return x * y;
};

exports.divide = (x, y) => {
  this._check(x, y);
  return x / y;
};

module.exports = exports;
