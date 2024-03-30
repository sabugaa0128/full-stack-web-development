const num1 = 10;
const num2 = 25;

// Check if num1 is less than num2
if (num1 <= num2) {
    // Loop from num1 to num2 (inclusive)
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
} else {
    console.log("num1 should be less than or equal to num2.");
}
