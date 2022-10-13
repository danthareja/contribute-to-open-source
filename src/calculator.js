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
    return x + y;
  } else {
    return
  }
};


exports.subtract = (x, y) => {
  if (this._check(x, y)) {
    return x - y;
  } else {
    return
  }
};

exports.multiply = (x, y) => {
  if (this._check(x, y)) {
    return x * y;
  } else {
    return
  }
};

exports.divide = (x, y) => {
  if (this._check(x, y)) {
    return x / y;
  } else {
    return
  }
};

module.exports = exports;
