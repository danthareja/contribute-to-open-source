exports._check = (x, y) => {
  exports._throwError(x);
  exports._throwError(y);
};

exports._throwError = (x) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
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
