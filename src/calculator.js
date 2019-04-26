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
  if(y == 0) {
    throw new TypeError("Can't divide by zero!");
  }
  return x / y;
};

exports.squareRoot = (x) => {
  if (typeof x !== 'number') {
    throw new TypeError('${x} is not a number');
  }
  if(x < 0) {
    throw new TypeError("Can't take square root of a negative number!");
  }
  return Math.sqrt(x);
}

exports.log10 = (x) => {
  if(typeof x !== 'number') {
    throw new TypeError('%{x} is not a number');
  }
  if(x <= 0) {
    throw new TypeError("Log can't accept negative or 0 input");
  }
  if(x === 1) {
    throw new TypeError("Log can't accept input of 1");
  }
  return Math.log10(x);
}

exports.ln = (x) => {
  if(typeof x !== 'number') {
    throw new TypeError('%{x} is not a number');
  }
  if(x <= 0) {
    throw new TypeError("ln can't accept negative or 0 input");
  }
  if(x === 1) {
    throw new TypeError("ln can't accept input of 1");
  }
  return Math.log(x);
}
module.exports = exports;
