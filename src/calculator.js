exports._check = (x, y) => {
  if (typeof x !== 'number') {
    return false;
  }
  if (typeof y !== 'number') {
    return false;
  }
  return true;
};

exports.add = (x, y) => {
  if (this._check(x, y)) {
    return x + y;
  }
  throw new TypeError(`${x} or ${y} is not a number`);
};

exports.subtract = (x, y) => {
  if (this._check(x, y)) {
    return x - y;
  }
  throw new TypeError(`${x} or ${y} is not a number`);
};

exports.multiply = (x, y) => {
  if (this._check(x, y)) {
    return x * y;
  }
  throw new TypeError(`${x} or ${y} is not a number`);
};

exports.divide = (x, y) => {
  if (this._check(x, y)) {
    return x / y;
  }
  throw new TypeError(`${x} or ${y} is not a number`);
};

module.exports = exports;
