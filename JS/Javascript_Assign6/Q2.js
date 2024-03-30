function checkMatch(regexPattern, inputString) {
    const regex = new RegExp(regexPattern);
    return regex.test(inputString);
}

// Test the checkMatch function with various patterns and strings
console.log("Match 'hello' in 'hello world':", checkMatch('hello', 'hello world')); // true
console.log("Match 'hello' in 'hi there':", checkMatch('hello', 'hi there')); // false

console.log("Match 'world' in 'hello world':", checkMatch('world', 'hello world')); // true
console.log("Match 'world' in 'hello there':", checkMatch('world', 'hello there')); // false

console.log("Match 'abc' in 'xyzabc123':", checkMatch('abc', 'xyzabc123')); // true
console.log("Match '123' in 'xyzabc123':", checkMatch('123', 'xyzabc123')); // true

console.log("Match email pattern:", checkMatch(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'example@email.com')); // true
console.log("Match email pattern:", checkMatch(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'invalid-email')); // false
