exports._check = (x, y) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  exports.add = () => {
    exports._check(x, y);
    return x + y;
  };

  exports.subtract = () => {
    exports._check(x, y);
    return x - y;
  };

  exports.multiply = () => {
    exports._check(x, y);
    return x * y;
  };

  exports.divide = () => {
    exports._check(x, y);
    return x / y;
  };

  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};


module.exports = exports;
