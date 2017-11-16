exports._check = (a, b) => {
  if (typeof a !== 'number') {
    throw new TypeError(`${a} is not a number`);
  }
  if (typeof b !== 'number') {
    throw new TypeError(`${b} is not a number`);
  }
};

exports.add = (x, y) => {
  exports._check(x, y);
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x, y);
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x, y);
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x, y);
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x / y;
};

module.exports = exports;

