exports._check = (x, y) => {
  if (typeof x !== 'number' || Number.isNaN(x)) {
    throw new TypeError(`${x} is not a number`);
  }
  if (y !== undefined && (typeof y !== 'number' || Number.isNaN(y))) {
    throw new TypeError(`${y} is not a number`);
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
  if (y === 0) {
    throw new RangeError('Division by zero');
  }
  return x / y;
};

exports.modulo = (x, y) => {
  exports._check(x, y);
  if (y === 0) {
    throw new RangeError('Modulo by zero');
  }
  return x % y;
};

exports.power = (x, y) => {
  exports._check(x, y);
  return x ** y;
};

exports.sqrt = (x) => {
  exports._check(x);
  if (x < 0) {
    throw new RangeError('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(x);
};

module.exports = exports;