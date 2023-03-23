_check = (x, y) => {
  if (typeof x !== "number") {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== "number") {
    throw new TypeError(`${y} is not a number`);
  }
};

exports.add = (x, y) => {
  _check(x, y);
  return x + y;
};

exports.subtract = (x, y) => {
  _check(x, y);
  return x - y;
};

exports.multiply = (x, y) => {
  _check(x, y);
  return x * y;
};

exports.divide = (x, y) => {
  _check(x, y);
  return x / y;
};

module.exports = exports;
