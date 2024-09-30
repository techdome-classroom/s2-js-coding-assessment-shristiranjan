/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];

    // Iterate through each character in the string
    for (const char of s) {
        // If it's a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from the stack if it exists, else assign a dummy value
            const topElement = stack.length ? stack.pop() : '#';
            // Check if the popped bracket matches the corresponding opening bracket
            if (bracketMap[char] !== topElement) {
                return false; // Mismatch found
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched; otherwise, it's invalid
    return stack.length === 0;
}

// Example usage
const testCases = [
    "()",        // true
    "()[]{}",    // true
    "(]",        // false
    "([{}])",    // true
    "{[()]}",    // true
    "((()))",    // true
    "((]",       // false
    "({[}])",    // false
    "(()))(",    // false
    "(({})[]){}" // true
];

testCases.forEach(testCase => {
    console.log(`isValid("${testCase}") = ${isValid(testCase)}`);
});    
};

module.exports = { isValid };


