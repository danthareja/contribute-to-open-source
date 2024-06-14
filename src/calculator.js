exports._check = (a, b) => {
  if (typeof a !== 'number' && typeof b !== 'number') {
    throw new TypeError(`both ${a} and ${b} are not numbers`);
  } else if (typeof a !== 'number') {
    throw new TypeError(`${a} is not a number`);
  } else if (typeof b !== 'number') {
    throw new TypeError(`${b} is not a number`);
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
  // if (typeof x !== 'number') {
  //   throw new TypeError(`${x} is not a number`);
  // }
  // if (typeof y !== 'number') {
  //   throw new TypeError(`${y} is not a number`);
  // }
  this._check(x, y);
  return x / y;
};

module.exports = exports;
