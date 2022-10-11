exports._check = (x, y) => {
  num = 'number'
  if (typeof x !== num) throw new TypeError(`${x} is not a ${num}`)
  if (typeof y !== num) throw new TypeError(`${y} is not a ${num}`)
};

exports.add = (x, y) => {
  exports._check(x, y)
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x, y)
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x, y)
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x, y)
  return x / y;
};

module.exports = exports;
