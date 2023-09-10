exports._check = (x, y) => {
  if (typeof x !== 'number'){
    throw new TypeError(`${x} must be a number`);
  }
  if (typeof y !== 'number'){
    throw new TypeError(`${y} must be a number`);
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
