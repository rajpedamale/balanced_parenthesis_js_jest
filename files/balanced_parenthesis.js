'use strict';

function isBalanced(parentheses) {
    if (!parentheses) return true;

    let balanced = false;
    const openStack = [];

    [...parentheses].forEach(letter => {
        if (['{', '['].includes(letter)) {
            openStack.push(letter);
        } else if (['}' , ']'].includes(letter)) {
            if (['{', '['].includes(openStack.pop())) {
                balanced = true;
            }
        }
    });

    return balanced;
}

module.exports = isBalanced;
