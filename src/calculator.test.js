/* eslint-disable no-unused-expressions */
const calculator = require('./calculator');

describe('_check', () => {
  beforeEach(() => {
    sinon.spy(calculator, '_check');
  });
  it('should divide one positive number and one negative number', () => {
    expect(calculator.divide(84, -2)).to.equal(-42);
  });
});
