function isValid(s) {
    // Stack to store opening brackets
    const stack = [s];
    
    // Hash map to store pairs of corresponding brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Loop through each character in the string
    for (let char of s) {
        // If the character is a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from the stack if it exists, otherwise assign a dummy value
            const topElement = stack.length ? stack.pop() : '#';
            
            // If the popped element does not match the corresponding opening bracket, return false
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it to the stack
            stack.push(char);
        }
    }
}