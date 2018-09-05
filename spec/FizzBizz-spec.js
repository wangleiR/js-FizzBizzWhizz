
const fb = require('../src/FizzBizz');


describe('FizzBizz', () => {
    describe('with given integer number', () => {
        let arr ;
        beforeEach(() => {
            arr = [...Array(120).keys()].map(num => num+1);
        });

        it('should print Fizz', () => {
            expect("Fizz").toBe(fb.Fizz(3));
        });

        it('should print Bizz', () => {
            expect("Bizz").toBe(fb.Bizz(5));
        });

        it('should print Fizz', () => {
            expect("Whizz").toBe(fb.Whizz(7));
        });

        it('should print Fizz', () => {
            expect("FizzBizzWhizz").toBe(fb.FizzBizz(105));
        });

    });
});
