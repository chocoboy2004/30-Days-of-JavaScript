/*
Activity 1: Arithmetic Operations
• Task 1: Write a program to add two numbers and log the result to the console.
• Task 2: Write a program to subtract two numbers and log the result to the console.
• Task 3: Write a program to multiply two numbers and log the result to the console.
• Task 4: Write a program to divide two numbers and log the result to the console.
• Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
*/
// 1
console.log(2 + 2)  // 4
// 2
console.log(10 - 2)  // 8
// 3
console.log(4 * 5)  // 20
// 4
console.log(20 / 3)  // 6.666666666666667
// 5
console.log(20 % 3)  // 2




/*
Activity 2: Assignment Operators
• Task 6: Use the += operator to add a number to a variable and log the result to the console.
• Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
*/
// 6
let num = 10
num += 20
console.log(num)  // 30
// 7
let anotherNum = 20
anotherNum -= 5
console.log(anotherNum)  // 15




/*
Activity 3: Comparison Operators
• Task 8: Write a program to compare two numbers using › and ‹ and log the result to the console.
• Task 9: Write a program to compare two numbers using ›= and ‹= and log the result to the console.
• Task 10: Write a program to compare two numbers using == and === and log the result to the console.
*/
// 8
console.log(10 > 5)  // tue
console.log(10 < 5)  // false

// 9
console.log(10 >= 10)  // true
console.log(10 <= 20)  // true

// 10
console.log(10 == "10")  // true
console.log(10 === "10")  // false




/*
Activity 4: Logical Operators
• Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
• Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
• Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
*/
// 11
console.log(11 > 10 && 10 < 9)  // false
// 12
console.log(11 > 10 || 10 < 9)  // true
// 13
console.log(!("hitesh" === "hitesh"))  // false




/*
Activity 5: Ternary Operator
• Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
*/
// 14
const number = 100
console.log(num < 0 ? "negative" : "positive")  // positive