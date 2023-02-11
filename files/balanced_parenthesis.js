'use strict';

const parenthesisMap = {
    '}': '{',
    ']': '[',
    ')': '('
};

function isBalanced(parentheses) {
    if (!parentheses) return true;

    let balanced;
    const openStack = [];

    [...parentheses].forEach(letter => {
        if (balanced === false) return;

        if (Object.values(parenthesisMap).includes(letter)) {
            openStack.push(letter);
        } else if (Object.keys(parenthesisMap).includes(letter)) {
            if (parenthesisMap[letter] === openStack.pop()) {
                balanced = true;
            } else {
                balanced = false;
            }
        }
    });

    return balanced;
};

module.exports = isBalanced;
