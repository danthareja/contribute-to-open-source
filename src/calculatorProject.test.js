const calculator = require('./calculator');

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

  //Added by John S
  it('should add two decimals and yield a decimal sum', () => {
    expect(calculator.add(.1245, .32)).to.equal(0.4445);
  });

  //Added by John S
  it('should return the first number if added to zero', () => {
    expect(calculator.add(.1245, 0)).to.equal(0.1245);
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

  //Added by John S
  it('should subtract two decimals and yield a decimal difference', () => {
    expect(calculator.subtract(4.326, 1.478)).to.equal(2.848);
  });

  //Added by John S
  it('should return the first number if zero is subtracted', () => {
    expect(calculator.subtract(.1245, 0)).to.equal(0.1245);
  });

  //Added by John S
  it('should return the negative of the second number if subtracted from zero', () => {
      expect(calculator.subtract(0, 4)).to.equal(-4);
  })
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

  it('should multiply two decimals and yield a decimal product', () => {
    expect(calculator.multiply(.41256, 1.542)).to.equal(.63616752);
  });

  it('should return 0 if either number is zero', () => {
    expect(calculator.multiply(3, 0)).to.equal(0);
    expect(calculator.multiply(0, 3)).to.equal(0);
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

  it('should throw an error if divides by zero', () => {
    expect(() => calculator.divide(3, 0)).to.throw(TypeError);
  });

  it('should divide a smaller number by a larger number and have decimal quotient', () => {
    expect(calculator.divide(3, 4)).to.equal(0.75);
  });

  it('should return zero if first number is zero', () => {
    expect(calculator.divide(0, 4)).to.equal(0);
  });
});

describe('squareRoot', () => {
  it('should throw a TypeError if argument is not a number', () => {
    expect(() => calculator.squareRoot(a).to.throw(TypeError));
    expect(() => calculator.squareRoot([]).to.throw(TypeError));
    expect(() => calculator.squareRoot({}).to.throw(TypeError));
  });

  it('should throw an error if argument is negative', () => {
    expect(() => calculator.squareRoot(-1).to.throw(TypeError));
  });
  
  it('should return the root of a perfect square as a whole number', () => {
    expect(calculator.squareRoot(4)).to.equal(2);
    expect(calculator.squareRoot(9)).to.equal(3);
    expect(calculator.squareRoot(16)).to.equal(4);
  });

  it('should return the root of a nonperfect square as a decimal', () => {
    expect(calculator.squareRoot(5)).to.equal(2.23606797749979);
    expect(calculator.squareRoot(11)).to.equal(3.3166247903554);
    expect(calculator.squareRoot(233)).to.equal(15.264337522473747);      
  });

});

describe('log10', () => {
  it('should throw a TypeError if argument is not a number', () => {
    expect(() => calculator.log10(a).to.throw(TypeError));
    expect(() => calculator.log10([]).to.throw(TypeError));
    expect(() => calculator.log10({}).to.throw(TypeError));
  });

  it('should throw an error if argument is negative or zero', () => {
    expect(() => calculator.log10(-1).to.throw(TypeError));
    expect(() => calculator.log10(0).to.throw(TypeError));
  });

  it('should throw an error if argumetn is 1', () => {
    expect(() => calculator.log10(1).to.throw(TypeError));
  });

  it('should calculate log base 10 of a positive number that is not 1', () => {
    expect(calculator.log10(4)).to.equal(0.6020599913279624);
    expect(calculator.log10(33.3)).to.equal(1.5224442335063197);
    expect(calculator.log10(100)).to.equal(2);
  });

});
describe('ln', () => {
  it('should throw a TypeError if argument is not a number', () => {
    expect(() => calculator.ln(a).to.throw(TypeError));
    expect(() => calculator.ln([]).to.throw(TypeError));
    expect(() => calculator.ln({}).to.throw(TypeError));
  });

  it('should throw an error if argument is negative or zero', () => {
    expect(() => calculator.ln(-1).to.throw(TypeError));
    expect(() => calculator.ln(0).to.throw(TypeError));
  });

  it('should throw an error if argumetn is 1', () => {
    expect(() => calculator.ln(1).to.throw(TypeError));
  });

  it('should calculate natural log of a positive number that is not 1', () => {
    expect(calculator.ln(4)).to.equal(1.3862943611198906);
    expect(calculator.ln(33.3)).to.equal(3.505557396986398);
    expect(calculator.ln(100)).to.equal(4.605170185988092);
  });

});