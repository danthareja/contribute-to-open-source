exports._check = (operands) => {
  operands.forEach((operand) => {
    if (typeof operand !== 'number') {
      throw new TypeError(`${operand} is not a number`);
    }
  });
};

exports.add = (x, y) => {
  exports._check([x, y]);
  return x + y;
};

exports.subtract = (x, y) => {
  exports._check([x, y]);
  return x - y;
};

exports.multiply = (x, y) => {
  exports._check([x, y]);
  return x * y;
};

exports.divide = (x, y) => {
  exports._check([x, y]);
  return x / y;
};

module.exports = exports;
