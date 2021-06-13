//exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
//};

exports._check = (x,y) => {
  // check if x !== number
  if(typeof x !== 'number') {
    // throw error x NAN
    throw new TypeError(`${x} is not a number`);
  }

  // check if y !== number
  if(typeof y !== 'number') {
    // throw error y NAN
    throw new TypeError(`${y} is not a number`);
  }  
}

exports.add = (x, y) => {
 // call exports function
 exports._check(x,y);
  return x + y;
};

exports.subtract = (x, y) => {
  // call exports function
  exports._check(x,y);
  return x - y;
};

exports.multiply = (x, y) => {
  // call exports function
  exports._check(x,y);
  return x * y;
};

exports.divide = (x, y) => {
  // call exports function
  exports._check(x,y);
  return x / y;
};

module.exports = exports;
