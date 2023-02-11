'use strict';

const isBalanced = require('./balanced_parenthesis');

describe('Balanced Parenthesis check', () => {
  it('should return a boolean', () => {
    expect(typeof isBalanced('')).toEqual('boolean');
  });

  it('should return true for empty arguments', () => {
    expect(isBalanced('')).toBeTruthy();
    expect(isBalanced()).toBeTruthy();
    expect(isBalanced(null)).toBeTruthy();
  });

  it('should return true for "{}"', () => {
    expect(isBalanced('{}')).toBeTruthy();
  });

  it('should return true for "[]"', () => {
    expect(isBalanced('[]')).toBeTruthy();
  });

  it('should return true for "()"', () => {
    expect(isBalanced('()')).toBeTruthy();
  });

  it('should return false for "(}"', () => {
    expect(isBalanced('}')).toBeFalsy();
  });

  it('should return false for "()}"', () => {
    expect(isBalanced('()}')).toBeFalsy();
  });

});
