export function _check(x, y) {
  if (typeof x !== 'number') {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== 'number') {
    throw new TypeError(`${y} is not a number`);
  }
}

export function add(x, y) {
  _check(x, y);
  return x + y;
}

export function subtract(x, y) {
  _check(x, y);
  return x - y;
}

export function multiply(x, y) {
  _check(x, y);
  return x * y;
}

export function divide(x, y) {
  _check(x, y);
  return x / y;
}
