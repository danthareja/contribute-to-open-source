/* eslint-disable no-unused-expressions */
const calculator = require('./calculator');

// Helper function to test TypeError for non-numeric inputs
function shouldThrowTypeErrorForNonNumbers(fn) {
  expect(() => fn(40, '2')).to.throw(TypeError);
  expect(() => fn(40, [])).to.throw(TypeError);
  expect(() => fn(40, {})).to.throw(TypeError);
  expect(() => fn('40', 2)).to.throw(TypeError);
  expect(() => fn([], 2)).to.throw(TypeError);
  expect(() => fn({}, 2)).to.throw(TypeError);
}

// Test for the _check method
describe.skip('_check', () => {
  beforeEach(() => {
    sinon.spy(calculator, '_check');
  });

  afterEach(() => {
    calculator._check.restore();
  });

  it('should throw a TypeError if arguments are not numbers', () => {
    shouldThrowTypeErrorForNonNumbers(calculator._check);
  });

  it('should be called once in "add"', () => {
    calculator.add(40, 2);
    expect(calculator._check).to.have.been.calledOnce;
    expect(calculator._check).to.have.been.calledWith(40, 2);
  });

  it('should be called once in "subtract"', () => {
    calculator.subtract(44, 2);
    expect(calculator._check).to.have.been.calledOnce;
    expect(calculator._check).to.have.been.calledWith(44, 2);
  });

  it('should be called once in "multiply"', () => {
    calculator.multiply(6, 7);
    expect(calculator._check).to.have.been.calledOnce;
    expect(calculator._check).to.have.been.calledWith(6, 7);
  });

  it('should be called once in "divide"', () => {
    calculator.divide(84, 2);
    expect(calculator._check).to.have.been.calledOnce;
    expect(calculator._check).to.have.been.calledWith(84, 2);
  });
});

// Test for the add method
describe('add', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    shouldThrowTypeErrorForNonNumbers(calculator.add);
  });

  it('should add two positive numbers', () => {
    expect(calculator.add(40, 2)).to.equal(42);
  });

  it('should add two negative numbers', () => {
    expect(calculator.add(-40, -2)).to.equal(-42);
  });

  it('should add one positive number and one negative number', () => {
    expect(calculator.add(44, -2)).to.equal(42);
  });
});

// Test for the subtract method
describe('subtract', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    shouldThrowTypeErrorForNonNumbers(calculator.subtract);
  });

  it('should subtract two positive numbers', () => {
    expect(calculator.subtract(44, 2)).to.equal(42);
  });

  it('should subtract two negative numbers', () => {
    expect(calculator.subtract(-44, -2)).to.equal(-42);
  });

  it('should subtract one positive number and one negative number', () => {
    expect(calculator.subtract(40, -2)).to.equal(42);
  });
});

// Test for the multiply method
describe('multiply', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    shouldThrowTypeErrorForNonNumbers(calculator.multiply);
  });

  it('should multiply two positive numbers', () => {
    expect(calculator.multiply(6, 7)).to.equal(42);
  });

  it('should multiply two negative numbers', () => {
    expect(calculator.multiply(-6, -7)).to.equal(42);
  });

  it('should multiply one positive number and one negative number', () => {
    expect(calculator.multiply(6, -7)).to.equal(-42);
  });
});

// Test for the divide method
describe('divide', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    shouldThrowTypeErrorForNonNumbers(calculator.divide);
  });

  it('should divide two positive numbers', () => {
    expect(calculator.divide(84, 2)).to.equal(42);
  });

  it('should divide two negative numbers', () => {
    expect(calculator.divide(-84, -2)).to.equal(42);
  });

  it('should divide one positive number and one negative number', () => {
    expect(calculator.divide(84, -2)).to.equal(-42);
  });
});


// Key Changes:
// Helper Function: shouldThrowTypeErrorForNonNumbers(fn) is created to reduce redundancy in testing the TypeError for non-numeric inputs. This is reused across all the methods.
// Readability: Tests are now more concise due to the centralization of error tests, making the code easier to understand and maintain.
// Maintainability: In case you need to update the way you test for TypeError or add additional checks, you only need to modify the helper function.
