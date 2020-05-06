exports._check = (number1,number2) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  if(typeof number1 !=='number'){
    throw new TypeError(`${number1} is not a number`);
  }
  if(typeof number2 !=='number'){
    throw new TypeError(`${number2} is not a number `);
  }
  
};

exports.add = (x, y) => {
  exports._check(x,y);
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x,y);
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x,y);
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x,y);
  return x / y;
};

module.exports = exports;
