exports._check = (number) => {
    if (typeof number !== 'number') {
        throw new TypeError(`${number} is not a number`);
    }
};

exports.add = (x, y) => {
  this._check(x);
  this._check(y);
  return x + y;
};

exports.subtract = (x, y) => {
  this._check(x);
  this._check(y);
  return x - y;
};

exports.multiply = (x, y) => {
  this._check(x);
  this._check(y);
  return x * y;
};

exports.divide = (x, y) => {
  this._check(x);
  this._check(y);
  return x / y;
};

module.exports = exports;
