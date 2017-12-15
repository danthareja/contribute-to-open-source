let x;
let y;
module.exports = exports;
exports._check = () => {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
};
exports.add = (x, y) => {
  return x + y;
};
exports.subtract = (x, y) => {
  return x - y;
};
exports.multiply = (x, y) => {
  return x * y;
};
exports.divide = (x, y) => {
  return x / y;
};
