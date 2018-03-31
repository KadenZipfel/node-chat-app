const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(24)).toBe(false);
  });
  
  it('should reject string with only spaces', () => {
    var string = '   ';
    
    expect(isRealString(string)).toBe(false);
  });
  
  it('should allow string with non-space characters', () => {
    var string = '  kask ';
    
    expect(isRealString(string)).toBe(true);
  });
});