'use strict';

const isBalanced = require('./balanced_paranthesis');

describe('Balanced Paranthesis check', () => {
  it('should return a boolean', () => {
    expect(typeof isBalanced('')).toEqual('boolean');
  });

  it('should return true for empty arguments', () => {
    expect(isBalanced('')).toBeTruthy();
    expect(isBalanced()).toBeTruthy();
    expect(isBalanced(null)).toBeTruthy();
  });

});
