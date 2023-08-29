exports._check = (x, y) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return [x, y];
};

exports.add = (x, y) => {
  const [x2, y2] = this._check(x, y);
  return x2 + y2;
};

exports.subtract = (x, y) => {
  const [x2, y2] = this._check(x, y);
  return x2 - y2;
};

exports.multiply = (x, y) => {
  const [x2, y2] = this._check(x, y);
  return x2 * y2;
};

exports.divide = (x, y) => {
  const [x2, y2] = this._check(x, y);
  return x2 / y2;
};

module.exports = exports;
