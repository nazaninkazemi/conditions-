console.log("Day 19 JavaScript Started");

// ======================================
// Task 1: Age Checker
// ======================================

const ageForm = document.getElementById("ageForm");

ageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const age = Number(document.getElementById("age").value);
    const ageResult = document.getElementById("ageResult");

    if (age < 0) {
        ageResult.textContent = "Invalid age.";
    } else if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a minor.";
    }

    console.log("Age:", age);
});


// ======================================
// Task 2: Number Checker
// ======================================

const numberForm = document.getElementById("numberForm");

numberForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const number = Number(document.getElementById("number").value);
    const numberResult = document.getElementById("numberResult");

    if (number > 0) {
        numberResult.textContent = "Positive number";
    } else if (number < 0) {
        numberResult.textContent = "Negative number";
    } else {
        numberResult.textContent = "Zero";
    }

    console.log("Number:", number);
});


// ======================================
// Task 3: Grade Checker
// ======================================

const gradeForm = document.getElementById("gradeForm");

gradeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const score = Number(document.getElementById("score").value);
    const gradeResult = document.getElementById("gradeResult");

    if (score < 0 || score > 100) {
        gradeResult.textContent = "Invalid score";
    } else if (score >= 90) {
        gradeResult.textContent = "Grade: A";
    } else if (score >= 80) {
        gradeResult.textContent = "Grade: B";
    } else if (score >= 70) {
        gradeResult.textContent = "Grade: C";
    } else if (score >= 60) {
        gradeResult.textContent = "Grade: D";
    } else {
        gradeResult.textContent = "Grade: F";
    }

    console.log("Score:", score);
});


// ======================================
// Task 4: Even or Odd
// ======================================

const evenOddForm = document.getElementById("evenOddForm");

evenOddForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const number = Number(
        document.getElementById("evenOddNumber").value
    );

    const evenOddResult = document.getElementById("evenOddResult");

    if (number % 1 !== 0) {
        evenOddResult.textContent = "Please enter a whole number.";
    } else if (number % 2 === 0) {
        evenOddResult.textContent = "Even number";
    } else {
        evenOddResult.textContent = "Odd number";
    }

    console.log("Even or Odd Number:", number);
});


// ======================================
// Task 5: Login Checker
// ======================================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginResult = document.getElementById("loginResult");

    if (username === "admin" && password === "12345") {
        loginResult.textContent = "Login successful";
    } else {
        loginResult.textContent = "Invalid username or password";
    }

    console.log("Username:", username);
});


// ======================================
// Task 6: Ternary Operator
// ======================================

const ternaryForm = document.getElementById("ternaryForm");

ternaryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const age = Number(document.getElementById("ternaryAge").value);
    const ternaryResult = document.getElementById("ternaryResult");

    const message = age < 0
        ? "Invalid age."
        : age >= 18
            ? "Adult"
            : "Minor";

    ternaryResult.textContent = message;

    console.log("Ternary Result:", message);
});


// ======================================
// Task 7: Access Checker
// ======================================

const accessForm = document.getElementById("accessForm");

accessForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const age = Number(document.getElementById("accessAge").value);
    const hasID = document.getElementById("hasID").checked;

    const accessResult = document.getElementById("accessResult");

    if (age >= 18 && hasID) {
        accessResult.textContent = "Access granted";
    } else {
        accessResult.textContent = "Access denied";
    }

    console.log("Age:", age);
    console.log("Has ID:", hasID);
});


// ======================================
// Bonus: Student Result Checker
// ======================================

const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const studentScore = Number(
        document.getElementById("studentScore").value
    );

    const studentResult = document.getElementById("studentResult");

    let grade;

    if (studentName === "") {
        studentResult.textContent = "Please enter the student name.";
    } else if (studentScore < 0 || studentScore > 100) {
        studentResult.textContent = "Invalid score";
    } else if (studentScore >= 90) {
        grade = "A";
    } else if (studentScore >= 80) {
        grade = "B";
    } else if (studentScore >= 70) {
        grade = "C";
    } else if (studentScore >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (studentName !== "" && studentScore >= 0 && studentScore <= 100) {
        const status = studentScore >= 60 ? "Passed" : "Failed";

        studentResult.textContent =
            "Student: " + studentName +
            " | Score: " + studentScore +
            " | Grade: " + grade +
            " | Status: " + status;
        console.log("Student:", studentName);
        console.log("Score:", studentScore);
        console.log("Grade:", grade);
        console.log("Status:", status);
    }

});