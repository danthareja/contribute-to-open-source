exports._check = (x , y) => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  values = [x , y]
  for(var i = 0 ;  i < values.length ; i++ ){
    if(typeof values[i] !== 'number') {
      throw new TypeError(`${values[i]} is not a number`);
    }
  }

};



exports.add = (x, y) => {
  exports._check(x , y)
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check(x , y)
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check(x , y)
  return x * y;
};

exports.divide = (x, y) => {
  exports._check(x , y)
  return x / y;
};

module.exports = exports;
