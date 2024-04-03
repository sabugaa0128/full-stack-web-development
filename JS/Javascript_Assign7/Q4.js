const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 21, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" }
  ];
  
  // a. Add a Student
  function addStudent(student) {
    students.push(student);
  }
  
  // b. Update Student Information
  function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    }
  }
  
  // c. Delete a Student
  function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      students.splice(studentIndex, 1);
    }
  }
  
  // d. List All Students
  function listStudents() {
    console.log("List of Students:");
    students.forEach(student => {
      console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
  }
  
  // e. Find Students by Grade
  function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
  }
  
  // f. Calculate Average Age
  function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }
  
  // Testing the functions
  addStudent({ id: 4, firstName: "Alice", lastName: "Brown", age: 22, grade: "B" });
  updateStudent(2, { age: 23 });
  deleteStudent(3);
  listStudents();
  const gradeBStudents = findStudentsByGrade("B");
  console.log("Students with Grade B:", gradeBStudents);
  const averageAge = calculateAverageAge();
  console.log("Average Age of Students:", averageAge);
  