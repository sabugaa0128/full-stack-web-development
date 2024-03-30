function findCharacterClassMatches(inputString) {
    const digitPattern = /\d/g; // Matches any digit character
    const uppercasePattern = /[A-Z]/g; // Matches any uppercase letter
    const lowercasePattern = /[a-z]/g; // Matches any lowercase letter
    const specialCharPattern = /[\W_]/g; // Matches any non-word character (special character)

    const digitMatches = inputString.match(digitPattern);
    const uppercaseMatches = inputString.match(uppercasePattern);
    const lowercaseMatches = inputString.match(lowercasePattern);
    const specialCharMatches = inputString.match(specialCharPattern);

    return {
        digits: digitMatches,
        uppercaseLetters: uppercaseMatches,
        lowercaseLetters: lowercaseMatches,
        specialCharacters: specialCharMatches
    };
}

// Test the findCharacterClassMatches function with a string
const testString = "Hello123! How are you?";
const matches = findCharacterClassMatches(testString);

console.log("Digits:", matches.digits); // Digits: [ '1', '2', '3' ]
console.log("Uppercase Letters:", matches.uppercaseLetters); // Uppercase Letters: [ 'H' ]
console.log("Lowercase Letters:", matches.lowercaseLetters); // Lowercase Letters: [ 'e', 'l', 'l', 'o', 'o', 'w', 'a', 'r', 'e', 'y', 'o', 'u' ]
console.log("Special Characters:", matches.specialCharacters); // Special Characters: [ '!', '?' ]
