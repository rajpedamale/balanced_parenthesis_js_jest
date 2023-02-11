'use strict';

const parenthesisMap = {
    '}': '{',
    ']': '['
}

function isBalanced(parentheses) {
    if (!parentheses) return true;

    let balanced = false;
    const openStack = [];

    [...parentheses].forEach(letter => {
        if (Object.keys(parenthesisMap).includes(letter)) {
            openStack.push(letter);
        } else if (Object.values(parenthesisMap).includes(letter)) {
            if (parenthesisMap[letter] === openStack.pop()) {
                balanced = true;
            }
        }
    });

    return balanced;
};

module.exports = isBalanced;
