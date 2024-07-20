// Activity 1: Variable Declaration
/*
Task 1: Declare a valiable using var, assign it a number and log the value to the console.
Task 2: Declare a variable using let, assign it a string, and log the value to the console.
*/
// Task 1
var num = 10;
console.log(num); // 10

// Task 2
let country = "India";
console.log(country); // India




// Activity 2: Constant Declaration
/*
Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
*/
// Task 3
const isLoggedIn = true;
console.log(isLoggedIn)  // true




// Activity 3: Data Types
/*
Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's type using the 
        typeof operator.
*/
// Task 4
const roll = 201
const state = "West Bengal"
const isActive = false
const user = {
    username: "iamhitesh",
    location: "India"
}
const array = [1, 2, "hitesh", false, null, {}]

console.log(typeof roll)  // number
console.log(typeof state)  // string
console.log(typeof isActive)  // boolean
console.log(typeof user)  // object
console.log(typeof array)  // object




// Activity 4: Reassigning Variables
/*
Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
*/
// Task 5
let value = 10
console.log(value)  // 10

value = 20
console.log(value)  // 20




// Activity 5: Understanding const
/*
Task 6: Try reassigning a variable declared with const and observe the error.
*/
// Task 6
const myName = "RG"
myName = "empty"
console.log(myName)  // TypeError: Assignment to constant variable.