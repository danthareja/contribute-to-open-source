exports._check = (val1, val2) => {
  if (typeof val1 !== 'number') {
    throw new TypeError(`${val1} is not a number`);
  }  
  if (typeof val2 !== 'number') {
    throw new TypeError(`${val2} is not a number`);
  }  
};

exports.add = (x, y) => {
  this._check(x, y);
  return x + y;
};

exports.subtract = (x, y) => {
  this._check(x, y);
  return x - y;
};

exports.multiply = (x, y) => {
  this._check(x, y);
  return x * y;
};

exports.divide = (x, y) => {
  this._check(x, y);
  return x / y;
};

module.exports = exports;
