exports._check = (x,y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return true;
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

exports.add = (x, y) => {
 if(exports._check(x,y)==true)
    return x + y;
};

exports.subtract = (x, y) => {
  if(exports._check(x,y)==true)
  return x - y;
};

exports.multiply = (x, y) => {
  if(exports._check(x,y)==true)
  return x * y;
};

exports.divide = (x, y) => {
  if(exports._check(x,y)==true)
  return x / y;
};

module.exports = exports;
