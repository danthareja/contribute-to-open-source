/* eslint-disable no-unused-expressions */
const calculator = require('./calculator');

describe('_check', () => {
  beforeEach(() => {
    sinon.spy(calculator, '_check');
  });

  afterEach(() => {
    calculator._check.restore();
  });

  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => calculator._check(40, '2')).to.throw(TypeError);
    expect(() => calculator._check(40, [])).to.throw(TypeError);
    expect(() => calculator._check(40, {})).to.throw(TypeError);
    expect(() => calculator._check('40', 2)).to.throw(TypeError);
    expect(() => calculator._check([], 2)).to.throw(TypeError);
    expect(() => calculator._check({}, 2)).to.throw(TypeError);
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

describe('add', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => calculator.add(40, '2')).to.throw(TypeError);
    expect(() => calculator.add(40, [])).to.throw(TypeError);
    expect(() => calculator.add(40, {})).to.throw(TypeError);
    expect(() => calculator.add('40', 2)).to.throw(TypeError);
    expect(() => calculator.add([], 2)).to.throw(TypeError);
    expect(() => calculator.add({}, 2)).to.throw(TypeError);
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

describe('subtract', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => calculator.subtract(40, '2')).to.throw(TypeError);
    expect(() => calculator.subtract(40, [])).to.throw(TypeError);
    expect(() => calculator.subtract(40, {})).to.throw(TypeError);
    expect(() => calculator.subtract('40', 2)).to.throw(TypeError);
    expect(() => calculator.subtract([], 2)).to.throw(TypeError);
    expect(() => calculator.subtract({}, 2)).to.throw(TypeError);
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

describe('multiply', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => calculator.multiply(40, '2')).to.throw(TypeError);
    expect(() => calculator.multiply(40, [])).to.throw(TypeError);
    expect(() => calculator.multiply(40, {})).to.throw(TypeError);
    expect(() => calculator.multiply('40', 2)).to.throw(TypeError);
    expect(() => calculator.multiply([], 2)).to.throw(TypeError);
    expect(() => calculator.multiply({}, 2)).to.throw(TypeError);
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

describe('divide', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => calculator.divide(40, '2')).to.throw(TypeError);
    expect(() => calculator.divide(40, [])).to.throw(TypeError);
    expect(() => calculator.divide(40, {})).to.throw(TypeError);
    expect(() => calculator.divide('40', 2)).to.throw(TypeError);
    expect(() => calculator.divide([], 2)).to.throw(TypeError);
    expect(() => calculator.divide({}, 2)).to.throw(TypeError);
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
