/* eslint-disable no-unused-expressions */
import calculator, { _check, add, subtract, multiply, divide } from './calculator';

describe('_check', () => {
  beforeEach(() => {
    sinon.spy(calculator, '_check');
  });

  afterEach(() => {
    _check.restore();
  });

  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => _check(40, '2')).to.throw(TypeError);
    expect(() => _check(40, [])).to.throw(TypeError);
    expect(() => _check(40, {})).to.throw(TypeError);
    expect(() => _check('40', 2)).to.throw(TypeError);
    expect(() => _check([], 2)).to.throw(TypeError);
    expect(() => _check({}, 2)).to.throw(TypeError);
  });

  it('should be called once in "add"', () => {
    add(40, 2);
    expect(_check).to.have.been.calledOnce;
    expect(_check).to.have.been.calledWith(40, 2);
  });

  it('should be called once in "subtract"', () => {
    subtract(44, 2);
    expect(_check).to.have.been.calledOnce;
    expect(_check).to.have.been.calledWith(44, 2);
  });

  it('should be called once in "multiply"', () => {
    multiply(6, 7);
    expect(_check).to.have.been.calledOnce;
    expect(_check).to.have.been.calledWith(6, 7);
  });

  it('should be called once in "divide"', () => {
    divide(84, 2);
    expect(_check).to.have.been.calledOnce;
    expect(_check).to.have.been.calledWith(84, 2);
  });
});

describe('add', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => add(40, '2')).to.throw(TypeError);
    expect(() => add(40, [])).to.throw(TypeError);
    expect(() => add(40, {})).to.throw(TypeError);
    expect(() => add('40', 2)).to.throw(TypeError);
    expect(() => add([], 2)).to.throw(TypeError);
    expect(() => add({}, 2)).to.throw(TypeError);
  });

  it('should add two positive numbers', () => {
    expect(add(40, 2)).to.equal(42);
  });

  it('should add two negative numbers', () => {
    expect(add(-40, -2)).to.equal(-42);
  });

  it('should add one positive number and one negative number', () => {
    expect(add(44, -2)).to.equal(42);
  });
});

describe('subtract', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => subtract(40, '2')).to.throw(TypeError);
    expect(() => subtract(40, [])).to.throw(TypeError);
    expect(() => subtract(40, {})).to.throw(TypeError);
    expect(() => subtract('40', 2)).to.throw(TypeError);
    expect(() => subtract([], 2)).to.throw(TypeError);
    expect(() => subtract({}, 2)).to.throw(TypeError);
  });

  it('should subtract two positive numbers', () => {
    expect(subtract(44, 2)).to.equal(42);
  });

  it('should subtract two negative numbers', () => {
    expect(subtract(-44, -2)).to.equal(-42);
  });

  it('should subtract one positive number and one negative number', () => {
    expect(subtract(40, -2)).to.equal(42);
  });
});

describe('multiply', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => multiply(40, '2')).to.throw(TypeError);
    expect(() => multiply(40, [])).to.throw(TypeError);
    expect(() => multiply(40, {})).to.throw(TypeError);
    expect(() => multiply('40', 2)).to.throw(TypeError);
    expect(() => multiply([], 2)).to.throw(TypeError);
    expect(() => multiply({}, 2)).to.throw(TypeError);
  });

  it('should multiply two positive numbers', () => {
    expect(multiply(6, 7)).to.equal(42);
  });

  it('should multiply two negative numbers', () => {
    expect(multiply(-6, -7)).to.equal(42);
  });

  it('should multiply one positive number and one negative number', () => {
    expect(multiply(6, -7)).to.equal(-42);
  });
});

describe('divide', () => {
  it('should throw a TypeError if arguments are not numbers', () => {
    expect(() => divide(40, '2')).to.throw(TypeError);
    expect(() => divide(40, [])).to.throw(TypeError);
    expect(() => divide(40, {})).to.throw(TypeError);
    expect(() => divide('40', 2)).to.throw(TypeError);
    expect(() => divide([], 2)).to.throw(TypeError);
    expect(() => divide({}, 2)).to.throw(TypeError);
  });

  it('should divide two positive numbers', () => {
    expect(divide(84, 2)).to.equal(42);
  });

  it('should divide two negative numbers', () => {
    expect(divide(-84, -2)).to.equal(42);
  });

  it('should divide one positive number and one negative number', () => {
    expect(divide(84, -2)).to.equal(-42);
  });
});
