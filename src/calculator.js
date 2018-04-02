exports._check = (a, b) => {
  if (typeof a !== 'number') {
    throw new TypeError(`${a} is not a number`);
  }
  if (typeof b !== 'number') {
    throw new TypeError(`${b} is not a number`);
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
