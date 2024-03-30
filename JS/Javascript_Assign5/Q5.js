function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Base case: factorial of 0 and 1 is 1
    } else if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    } else {
        return num * factorial(num - 1); // Recursive case: factorial(n) = n * factorial(n - 1)
    }
}


console.log("Factorial of 0:", factorial(0)); // Factorial of 0: 1
console.log("Factorial of 5:", factorial(5)); // Factorial of 5: 120
console.log("Factorial of 10:", factorial(10)); // Factorial of 10: 3628800
console.log("Factorial of -1:", factorial(-1)); // Factorial of -1: Factorial is not defined for negative numbers.
