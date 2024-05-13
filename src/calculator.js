exports._check = () => {
  // DRY up the codebase with this function
  // First, move the duplicate error checking code here
  // Then, invoke this function inside each of the others
  // HINT: you can invoke this function with exports._check()
  describe('_check', () => {
    beforeEach(() => {
      sinon.spy(calculator, '_check');
    });
  
    afterEach(() => {
      calculator._check.restore();
    });
  
    it('should throw a TypeError if arguments are not numbers', (exports._check) => {
      expect(() => calculator._check(40, '2')).to.throw(TypeError);
      expect(() => calculator._check(40, [])).to.throw(TypeError);
      expect(() => calculator._check(40, {})).to.throw(TypeError);
      expect(() => calculator._check('40', 2)).to.throw(TypeError);
      expect(() => calculator._check([], 2)).to.throw(TypeError);
      expect(() => calculator._check({}, 2)).to.throw(TypeError);
    });
  
    it('should be called once in "add"', (exports._check) => {
      calculator.add(40, 2);
      expect(calculator._check).to.have.been.calledOnce;
      expect(calculator._check).to.have.been.calledWith(40, 2);
    });
  
    it('should be called once in "subtract"', (exports._check) => {
      calculator.subtract(44, 2);
      expect(calculator._check).to.have.been.calledOnce;
      expect(calculator._check).to.have.been.calledWith(44, 2);
    });
  
    it('should be called once in "multiply"', (exports._check) => {
      calculator.multiply(6, 7);
      expect(calculator._check).to.have.been.calledOnce;
      expect(calculator._check).to.have.been.calledWith(6, 7);
    });
  
    it('should be called once in "divide"', (exports._check) => {
      calculator.divide(84, 2);
      expect(calculator._check).to.have.been.calledOnce;
      expect(calculator._check).to.have.been.calledWith(84, 2);
    });
  });
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

module.exports = exports;
