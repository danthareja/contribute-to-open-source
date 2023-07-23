exports._check = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('Both inputs must be numbers');
    }
};

exports.add = (x, y) => {
  exports._check(x, y); // Validate inputs using _check function
    return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x, y); // Validate inputs using _check function
    return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x, y); // Validate inputs using _check function
    return x * y;
};

exports.divide = (x, y) => {
  exports._check(x, y); // Validate inputs using _check function
    return x / y;
};
