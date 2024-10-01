exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

exports.add = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x + y;
};

exports.subtract = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x - y;
};

exports.multiply = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x * y;
};

exports.divide = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
  return x / y;
};
exports.power = (x,y)=>{
  if(typeOf x!=== 'number'){
    throw new TypeError(`${x} is not a number`);
  }
  if(typeOf y!=== 'number'){
    throw new TypeError(`${y} is not a number`);
  }
  return Math.pow(x,y);
}

exports.root = (x)=>{
  if(typeOf x!=== 'number'){
    throw new TypeError(`${x} is not a number`);
  }
  if (x < 0) {
    throw new RangeError(`${x} is not a valid input for square root`);
  }
  return Math.sqrt(x);
}

module.exports = exports;
