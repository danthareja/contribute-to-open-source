exports._check = () => {
  throw new TypeError(`${x} is not a number`);// DRY up the codebase with this function
  throw new TypeError(`${y} is not a number`);// First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

exports.add = (x, y) => {
  if (typeof x !== 'number') {
    exports._check();
  }
  if (typeof y !== 'number') {
    exports._check();
  }
  return x + y;
};

exports.subtract = (x, y) => {
  if (typeof x !== 'number') {
    exports._check();
  }
  if (typeof y !== 'number') {
    exports._check();
  }
  return x - y;
};

exports.multiply = (x, y) => {
  if (typeof x !== 'number') {
    exports._check();
  }
  if (typeof y !== 'number') {
    exports._check();
  }
  return x * y;
};

exports.divide = (x, y) => {
  if (typeof x !== 'number') {
    exports._check();
  }
  if (typeof y !== 'number') {
    exports._check();
  }
  return x / y;
};

module.exports = exports;
