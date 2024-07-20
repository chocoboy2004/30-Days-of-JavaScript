/*
Activity 1: If-Else Statements
• Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
• Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

Activity 2: Nested If-Else Statements
• Task 3: Write a program to find the largest of three numbers using nested if-else statements.

Activity 3: Switch Case
• Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
• Task 5: Write a program that uses a switch case to assign a grade (A, B, C, D, F) based on a score and log the grade to the console.

Activity 4: Conditional (Ternary) Operator
• Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

Activity 5: Combining Conditions
• Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible 
          by 400) and log the result to the console.
*/

// 1
const number = 10
if (number < 0) {
    console.log("Negative number")
} else if (number > 0) {
    console.log("Positive number")  // ans
} else {
    console.log("Zero")
}

// 2
let age = 17
if (age >= 18) {
    console.log("Eligible for voting")
} else {
    console.log("Not eligible for voting")  // ans
}

// 3
let num1 = 10
let num2 = 30
let num3 = 20

if (num1 > num2) {
    if (num1 > num3) {
        console.log(`Greatest: ${num1}`)
    } else {
        console.log(`Greatest: ${num3}`)
    }
} else {
    if (num2 > num1) {
        if (num2 > num3) {
            console.log(`Greatest: ${num2}`)  // ans
        } else {
            console.log(`Greatest: ${num3}`)
        }
    }
}

// 4
let day = 5
switch(day) {
    case 1: console.log("Monday")
    break;

    case 2: console.log("Tuesday")
    break;

    case 3: console.log("Wednessday")
    break;

    case 4: console.log("Thursday")
    break;

    case 5: console.log("Friday")  // ans
    break;

    case 6: console.log("Saturday")
    break;

    case 7: console.log("Sunday")
    break;

    default:
        console.log("Invalid day number")
}

// 5
let grade = "A"
switch(grade) {
    case "A": console.log("Grade A")  // ans
    break

    case "B": console.log("Grade B")
    break

    case "C": console.log("Grade C")
    break

    case "D": console.log("Grade D")
    break

    case "F": console.log("Grade F")
    break

    default:
        console.log("Invalid grade")
}

// 6
let num = 9
console.log(num % 2 === 0 ? "Even number" : "Odd number")  // Odd number

// 7
let year = 1990
if (year % 4 === 0) {
    if (year % 100 !== 0) {
        console.log("Leap Year")
    } else if (year % 400 === 0) {
        console.log("leap year")
    }
} else {
    console.log("Not a leap year")
}

console.log(2000 % 4)