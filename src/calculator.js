const calculator = {
  _check(x, y) {
    if (typeof x !== 'number') {
      throw new TypeError(`${x} is not a number`);
    }
    if (typeof y !== 'number') {
      throw new TypeError(`${y} is not a number`);
    }
  },

  add(x, y) {
    this._check(x, y);
    return x + y;
  },

  subtract(x, y) {
    this._check(x, y);
    return x - y;
  },

  multiply(x, y) {
    this._check(x, y);
    return x * y;
  },

  divide(x, y) {
    this._check(x, y);
    return x / y;
  },
};

module.exports = calculator;