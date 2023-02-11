'use strict';

function isBalanced(parentheses) {
    if (!parentheses) return true;

    let balanced = false;
    const openStack = [];

    [...parentheses].forEach(letter => {
        if (letter === '{') {
            openStack.push(letter);
        } else if (letter === '}') {
            if (openStack.pop() === '{') {
                balanced = true;
            }
        }
    })

    return balanced;
}

module.exports = isBalanced;
