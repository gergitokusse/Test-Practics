const Testing = require('./stringLength');
const assert = require('assert');

describe('Tests String length', () => { 
    const test = new Testing();
    it('String empty ', () => {
      assert(test.stringLength('') === 'At least one char')
    })
    it('String not more than 10 ', () => {
      assert(test.stringLength('Gergitokusseduba') === 'Not more than 10 char')
    })
    it('String char count', () => {
      assert(test.stringLength('Abebe') === 5)
    })
    it('String Reverse', () => {
      assert(test.reversString('Abebe') === 'ebebA')
    })
  })

  
