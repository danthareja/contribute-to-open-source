const checkNumber = (x, y) => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }

};

const checkDivideByZero = (y) => {
  if (y === 0) {
    throw new Error('Cannot divide by zero');
  }
};

exports.add = (x, y = 0) => {
  checkNumber(x, y);
  return x + y;
};

exports.subtract = (x, y = 0) => {
  checkNumber(x, y);
  return x - y;
};

exports.multiply = (x, y = 1) => {
  checkNumber(x, y);
  return x * y;
};

exports.divide = (x, y = 1) => {
  checkNumber(x, y);
  checkDivideByZero(y);
  return x / y;
};

module.exports = exports;
