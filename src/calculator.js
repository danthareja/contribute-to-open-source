exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

exports.add = (x, y) => {
  if (typeof x == 'number' && typeof y == 'number') {
      return x+y;
  }
  else{
    throw new TypeError(`${y} is not a number`);
  }
};

exports.subtract = (x, y) => {
  if (typeof x == 'number' && typeof y == 'number') {
    return x - y;
  }
  else{
    throw new TypeError(`input is not a number`);
  }
  
};

exports.multiply = (x, y) => {
  if (typeof x == 'number' && typeof y == 'number') {
      return x * y;
  }
   else {
    throw new TypeError(`input is not a number`);
  }

};

exports.divide = (x, y) => {
  if (typeof x == 'number' && typeof y == 'number') {
    return x / y;
  }
  else {
    throw new TypeError(`input is not a number`);
  }

};

module.exports = exports;
