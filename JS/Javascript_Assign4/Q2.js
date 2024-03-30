function gradeStudent(marks) {
    if (marks >= 90) {
        return "A Grade";
    } else if (marks >= 70 && marks < 90) {
        return "B Grade";
    } else if (marks >= 50 && marks < 70) {
        return "C Grade";
    } else {
        return "F Grade";
    }
}

let marks1 = 85;
let marks2 = 45;
let marks3 = 92;

console.log(`Student 1 - Marks: ${marks1}, Grade: ${gradeStudent(marks1)}`);
console.log(`Student 2 - Marks: ${marks2}, Grade: ${gradeStudent(marks2)}`);
console.log(`Student 3 - Marks: ${marks3}, Grade: ${gradeStudent(marks3)}`);
