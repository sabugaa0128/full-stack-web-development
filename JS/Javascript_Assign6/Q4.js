function extractMatchedParts(regexPattern, inputString) {
    const regex = new RegExp(regexPattern);
    const match = regex.exec(inputString);

    if (!match) {
        return null; // No match found
    }

    const matchedParts = {};
    for (let i = 1; i < match.length; i++) {
        matchedParts[`group${i}`] = match[i];
    }

    return matchedParts;
}

// Test the extractMatchedParts function with a date pattern
const datePattern = /(\d{1,2})-(\d{1,2})-(\d{4})/;
const testString = "Today is 25-03-2024, and tomorrow is 26-03-2024.";
const matchedParts = extractMatchedParts(datePattern, testString);

if (matchedParts) {
    console.log("Matched Parts:", matchedParts);
    console.log("Day:", matchedParts.group1); // Day: 25
    console.log("Month:", matchedParts.group2); // Month: 03
    console.log("Year:", matchedParts.group3); // Year: 2024
} else {
    console.log("No match found.");
}
