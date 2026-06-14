// Central validator
const check = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};

// Wrapper to avoid repeating validation in every function
const withCheck = (fn) => (x, y) => {
  check(x, y);
  return fn(x, y);
};

exports.add = withCheck((x, y) => x + y);

exports.subtract = withCheck((x, y) => x - y);

exports.multiply = withCheck((x, y) => x * y);

exports.divide = withCheck((x, y) => x / y);

// optional export if tests require it
exports._check = check;

module.exports = exports;