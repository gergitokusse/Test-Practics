const calculator = require('./calculator');
const assert = require('assert');
describe('Addition', () => {
    const cal = new calculator();
    it('Test 1', () => {
        assert(cal.add(3,4) === 7)
    });
    it('Test 2', () => {
        assert(cal.add(0,5) === 5)
    });
    it('Test 3', () => {
        assert(cal.add(9,0) === 9)
    });    
});
describe('Subtraction', () => {
    const cal = new calculator();
    it('Test 1', () => {
        assert(cal.sub(3,4) === -1)
    });
    it('Test 2', () => {
        assert(cal.sub(0,5) === -5)
    });
    it('Test 3', () => {
        assert(cal.sub(9,0) === 9)
    });    
});
describe('Multiplication', () => {
    const cal = new calculator();
    it('Test 1', () => {
        assert(cal.multi(3,4) === 12)
    });
    it('Test 2', () => {
        assert(cal.multi(0,5) === 0)
    });
    it('Test 3', () => {
        assert(cal.multi(9,0) === 0)
    });    
});
describe('Devision', () => {
    const cal = new calculator();
    it('Test 1', () => {
        assert(cal.div(8,4) === 2)
    });
    it('Test 2', () => {
        assert(cal.div(0,5) === 0)
    });
    it('Test 3', () => {
        assert(cal.div(9,0) === 'Invalid')
    });    
});


