function isNumber(value) {
  return typeof value === 'number';
}

function throwInvalidNumberError(value) {
  throw new TypeError(`${value} is not a number`);
}

exports._check = (x, y) => {
  if (!isNumber(x)) {
    throwInvalidNumberError(x);
  }

  if (!isNumber(y)) {
    throwInvalidNumberError(y);
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
