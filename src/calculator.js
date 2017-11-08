exports._check = (x, y) => {
  function doCheck(n) {
    if (typeof n !== 'number') {
      throw new TypeError(`${n} is not a number`);
    }
  }
  
  doCheck(x);
  doCheck(y);
};

exports.add = (x, y) => {
  exports._check(x,y);
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x,y);
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x,y);
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x,y);
  return x / y;
};

module.exports = exports;
