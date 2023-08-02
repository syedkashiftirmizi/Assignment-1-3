"use strict";
// Name: Syed Kashif Shah
// Roll Number: PIAIC213212
// Batch: 48
// Assignment: 2
console.log("بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ");
/*
Create a grading system that takes subject marks as input from the user through prompts and
returns the corresponding grades using functions and if-else conditions.*/
function getUserInput() {
    const userInput = prompt("Enter Your Marks");
    if (userInput === null) {
        return "You canceled";
    }
    const marks = Number(userInput);
    if (isNaN(marks)) {
        return "Invalid input. Please enter a valid number.";
    }
    if (marks >= 90) {
        return 'A+';
    }
    else if (marks >= 80) {
        return 'A';
    }
    else if (marks >= 70) {
        return 'B';
    }
    else if (marks >= 60) {
        return 'C';
    }
    else if (marks >= 50) {
        return 'D';
    }
    else {
        return 'F';
    }
}
const result = getUserInput();
if (result !== undefined) {
    console.log("Your grade is:", result);
}
