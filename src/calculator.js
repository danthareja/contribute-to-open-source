exports._check = (n, m) => {

  if (typeof n !== 'number') {
    throw new TypeError(`${n} is not a number`);
  }  
  
  if (typeof m !== 'number') {
    throw new TypeError(`${m} is not a number`);
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
