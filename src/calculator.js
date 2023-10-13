exports._check = (x) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
};

exports.add = (x, y) => {
  exports._check(x);
  exports._check(y);
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x);
  exports._check(y);
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x);
  exports._check(y);
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x);
  exports._check(y);
  if (y === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return x / y;
};

module.exports = exports;
