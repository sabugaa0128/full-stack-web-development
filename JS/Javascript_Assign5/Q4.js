function calculateTax() {
    // Tax rates based on income ranges
    const taxRates = [
        { minIncome: 0, maxIncome: 10000, rate: 0.1 },
        { minIncome: 10001, maxIncome: 50000, rate: 0.15 },
        { minIncome: 50001, maxIncome: 100000, rate: 0.2 },
        { minIncome: 100001, maxIncome: Infinity, rate: 0.25 }
    ];

    // Return a function that calculates tax based on income
    return function(income) {
        let taxAmount = 0;
        for (const rate of taxRates) {
            if (income > rate.minIncome && income <= rate.maxIncome) {
                taxAmount = income * rate.rate;
                break;
            }
        }
        return taxAmount;
    };
}

const calculateTaxForIncome = calculateTax();

console.log("Tax for $5000 income:", calculateTaxForIncome(5000)); 
console.log("Tax for $25000 income:", calculateTaxForIncome(25000)); 
console.log("Tax for $75000 income:", calculateTaxForIncome(75000)); 
console.log("Tax for $150000 income:", calculateTaxForIncome(150000)); 
