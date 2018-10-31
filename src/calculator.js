exports._check = (a,b) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()

  if (typeof a !== 'number') {
    throw new TypeError(`not a number`);
  }
  if (typeof b !== 'number') {
    throw new TypeError(`not a number`);
  }
};

exports.add = (x, y) => {
  if (typeof a !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof b !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x + y;
};

exports.subtract = (x, y) => {
  if (typeof a !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof b !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x - y;
};

exports.multiply = (x, y) => {
  if (typeof a !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof b !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x * y;
};

exports.divide = (x, y) => {
  if (typeof a !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof b !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x / y;
};

module.exports = exports;
