function outerFunction(parameter) {
    const innerVariable = "Inner Variable";

    function innerFunction() {
        console.log(`Parameter from outerFunction: ${parameter}`);
        console.log(`Inner variable from outerFunction: ${innerVariable}`);
    }

    return innerFunction;
}

// Example usage
const innerFunc = outerFunction("Outer Parameter");
innerFunc(); // This will log both the parameter and inner variable from outerFunction
