const cap = require('./capitalize');
const assert = require('assert');

describe('Captalization', () => {
    const capital = new cap();
    it('Test-1', () => {
        assert(capital.captalize('gerg') === 'Gerg')
    });
    
    it('Test-2', () => {
        assert(capital.captalize('kusse') === 'Kusse')
    });
});
