exports._check = (x, y) => {
  // DRY up the codebase with this function
  //DRY, it's Do Not Repeat Yourself
  //Initially we were doing the same error checking again and again for all the operations
  //Our mission now is to make sure all that error checking is done once here.
  
  // First, move the duplicate error checking code here
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
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
