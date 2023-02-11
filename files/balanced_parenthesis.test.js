'use strict';

const isBalanced = require('./balanced_parenthesis');

describe('Balanced Parenthesis check', () => {
  it('should return a boolean', () => {
    expect(typeof isBalanced('')).toEqual('boolean');
  });

  it('should return true for empty arguments', () => {
    expect(isBalanced('')).toEqual(true);
    expect(isBalanced()).toEqual(true);
    expect(isBalanced(null)).toEqual(true);
  });

  it('should return true for "{}"', () => {
    expect(isBalanced('{}')).toEqual(true);
  });

  it('should return true for "[]"', () => {
    expect(isBalanced('[]')).toEqual(true);
  });

  it('should return true for "()"', () => {
    expect(isBalanced('()')).toEqual(true);
  });

  it('should return false for "(}"', () => {
    expect(isBalanced('}')).toEqual(false);
  });

  it('should return false for "()}"', () => {
    expect(isBalanced('()}')).toEqual(false);
  });
  
  it('should return false for "("', () => {
    expect(isBalanced('(')).toEqual(false);
  });
  
  it('should return false for "((()"', () => {
    expect(isBalanced('((()')).toEqual(false);
  });
  
  it('should return false for "(((){}"', () => {
    expect(isBalanced('(((){}')).toEqual(false);
  });
  
  it('should pass the suite of tests from ReadMe', () => {
    expect(isBalanced('{{)(}}')).toEqual(false);
    expect(isBalanced('({)}')).toEqual(false);;
    expect(isBalanced('[({})]')).toEqual(true);
    expect(isBalanced('{}([])')).toEqual(true);
    expect(isBalanced('{()}[[{}]]')).toEqual(true);
  });
});
