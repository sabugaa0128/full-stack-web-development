function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// Test the curry function with a function that adds two numbers
const add = (a, b) => a + b;
const curriedAdd = curry(add);

const result1 = curriedAdd(3)(5);
const result2 = curriedAdd(7, 8);

console.log("Result 1:", result1); // Result 1: 8 (3 + 5)
console.log("Result 2:", result2); // Result 2: 15 (7 + 8)
