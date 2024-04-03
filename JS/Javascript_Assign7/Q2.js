const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

// Step 1: Sort the array and find min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Step 2: Find the median age
let medianAge;
if (ages.length % 2 === 0) {
    const midIndex1 = ages.length / 2 - 1;
    const midIndex2 = midIndex1 + 1;
    medianAge = (ages[midIndex1] + ages[midIndex2]) / 2;
} else {
    const midIndex = Math.floor(ages.length / 2);
    medianAge = ages[midIndex];
}

// Step 3: Find the average age
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

// Step 4: Find the range of ages
const ageRange = maxAge - minAge;

// Step 5: Compare (min age - average age) and (max age - average age) using abs()
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

// Output the results
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Absolute Difference (Min - Average):', diffMinAverage);
console.log('Absolute Difference (Max - Average):', diffMaxAverage);
