exports._check = (num1, num2) => {
  if (typeof num1 !== 'number') {
    throw new TypeError(`${num1} is not a number`);
  }
  if (typeof num2 !== 'number') {
    throw new TypeError(`${num2} is not a number`);
  }

  // DRY up the codebase with this function First, move the duplicate error
  // checking code here Then, invoke this function inside each of the others HINT:
  // you can invoke this function with exports._check()
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
