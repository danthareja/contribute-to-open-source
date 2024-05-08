// Remove this below Commented Code if you are on any other operating system instead of windows
// eslint-disable-next-line max-len
// Thing to do if you are getting eslint errors :- Firstly If you are using vscode and you are on Windows i would recommend you to click the option at the bottom-right of the window and set it to LF from CRLF. Because we should not turn off the configuration just for sake of removing errors on Windows
// eslint-disable-next-line @typescript-eslint/quotes
exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
};

exports.add = (x, y) => {
  if (typeof x !== "number") {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== "number") {
    throw new TypeError(`${y} is not a number`);
  }
  return x + y;
};

exports.subtract = (x, y) => {
  if (typeof x !== "number") {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== "number") {
    throw new TypeError(`${y} is not a number`);
  }
  return x - y;
};

exports.multiply = (x, y) => {
  if (typeof x !== "number") {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== "number") {
    throw new TypeError(`${y} is not a number`);
  }
  return x * y;
};

exports.divide = (x, y) => {
  if (typeof x !== "number") {
    throw new TypeError(`${x} is not a number`);
  }
  if (typeof y !== "number") {
    throw new TypeError(`${y} is not a number`);
  }
  return x / y;
};

module.exports = exports;
