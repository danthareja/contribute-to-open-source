exports._check = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return true;
};

exports.add = (x, y) => {
  if (this._check(x, y)) {
    if (typeof x !== 'number') {
      throw new TypeError(`${x} is not a number`);
    }
    if (typeof y !== 'number') {
      throw new TypeError(`${y} is not a number`);
    }
    return x + y;
  }
};
  

exports.subtract = (x, y) => {
  if (this._check(x, y)) {
    if (typeof x !== 'number') {
      throw new TypeError(`${x} is not a number`);
    }
    if (typeof y !== 'number') {
      throw new TypeError(`${y} is not a number`);
    }
    return x - y;
  }
};

exports.multiply = (x, y) => {
  if (this._check(x, y)) {
    if (typeof x !== 'number') {
      throw new TypeError(`${x} is not a number`);
    }
    if (typeof y !== 'number') {
      throw new TypeError(`${y} is not a number`);
    }
    return x * y;
  }
};

exports.divide = (x, y) => {
  if (this._check(x, y)) {
    if (typeof x !== 'number') {
      throw new TypeError(`${x} is not a number`);
    }
    if (typeof y !== 'number') {
      throw new TypeError(`${y} is not a number`);
    }
    return x / y;
  }
};

module.exports = exports;
