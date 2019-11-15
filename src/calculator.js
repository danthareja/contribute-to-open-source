exports._check = (x, y) => {
  if (typeof x !== 'number') {
    // eslint-disable-next-line no-undef
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    // eslint-disable-next-line no-undef
    throw new TypeError(`${y} is not a number`);
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