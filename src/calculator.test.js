const calculator = require('./calculator');

describe('_check', () => {
    beforeEach(() => {
        sinon.spy(calculator, '_check');
    });

    afterEach(() => {
        calculator._check.restore();
    });


    it('should be called once in "add"', () => {
        calculator._check(40, 2);
        calculator.add(40, 2);
        expect(calculator._check).to.have.been.calledOnce;
        expect(calculator._check).to.have.been.calledWith(40, 2);
    });

    it('should be called once in "subtract"', () => {
        calculator._check(44, 2);
        calculator.subtract(44, 2);
        expect(calculator._check).to.have.been.calledOnce;
        expect(calculator._check).to.have.been.calledWith(44, 2);
    });

    it('should be called once in "multiply"', () => {
        calculator._check(6, 7);
        calculator.multiply(6, 7);
        expect(calculator._check).to.have.been.calledOnce;
        expect(calculator._check).to.have.been.calledWith(6, 7);
    });

    it('should be called once in "divide"', () => {
        calculator._check(84, 2);
        calculator.divide(84, 2);
        expect(calculator._check).to.have.been.calledOnce;
        expect(calculator._check).to.have.been.calledWith(84, 2);
    });
});