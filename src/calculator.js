exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

exports.add_check = (x, y) => {
  return x + y;
};

exports.subtract_check = (x, y) => {
  return x - y;
};

exports.multiply_check = (x, y) => {
  return x * y;
};

exports.divide_check = (x, y) => {
  }
  return x / y;
};

module.exports = exports;
