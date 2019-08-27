exports._check = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x + y;
};

  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  // npm error on local machine fix later

exports.add = (x, y) => {
  exports._check(x, y);
};
exports.subtract = (x, y) => {
  exports._check(x, y);
};
exports.multiply = (x, y) => {
  exports._check(x, y);
};

exports.divide = (x, y) => {
  exports._check(x, y);
};
module.exports = exports;
