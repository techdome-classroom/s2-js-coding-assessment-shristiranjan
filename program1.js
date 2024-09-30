
   /**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let matchingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (matchingBrackets[char]) {
            stack.push(char);
        }
        else {
            let topElement = stack.pop();
            if (matchingBrackets[topElement] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

module.exports = { isValid };
