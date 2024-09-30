function isValid(s) {
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        // If the character is a left bracket, push the corresponding right bracket onto the stack
        if (mapping[char]) {
            stack.push(mapping[char]);
        } else {
            // If the stack is empty or the top of the stack does not match the current character
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}

module.exports = { isValid };