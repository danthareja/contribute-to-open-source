exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

// This function checks if the given arguments are of type `number`
// and throws a TypeError if not.
const _check = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};

exports.add = (x, y) => {
  _check(x, y);
  return x + y;
};

exports.subtract = (x, y) => {
  _check(x, y);
  return x - y;
};

exports.multiply = (x, y) => {
  _check(x, y);
  return x * y;
};

exports.divide = (x, y) => {
  _check(x, y);
  return x / y;
};

