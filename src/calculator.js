exports._check = (num1, num2) => {
  if (typeof num1 !== 'number') throw new TypeError(`${num1} is not a number`);
  if (typeof num2 !== 'number') throw new TypeError(`${num2} is not a number`);
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
