// Question 1: Declare a variable using let and log its value
let a = 12;
console.log(a); // Output: 12

// Question 2: Create a constant to store the value of PI and log it
const pi = Math.PI;
console.log(pi); // Output: 3.141592653589793

// Question 3: Reassign a value to a variable declared with let and log the result
let b = 12;
b = 22; // Reassignment allowed with let
console.log(b); // Output: 22

// Question 4: Check the type of null and log it
console.log(typeof null); // Output: object (known bug in JavaScript)

// Question 5: Create a variable with a number as a string (e.g., "25") and log its type
var aa = "25";
console.log(typeof aa); // Output: string

// Question 6: Use typeof to check the type of a boolean variable
var bb = true;
console.log(typeof bb); // Output: boolean

// Question 7: Create three variables of types string, number, and boolean, and log their values
let cc = "hey", ee = 13, ff = true;
console.log(cc, ee, ff); // Output: hey 13 true

// Question 8: Declare a variable without assigning a value, and log its type
var g;
console.log(typeof g); // Output: undefined

// Question 9: Create a variable with undefined and log its value
let tt = undefined;
console.log(tt); // Output: undefined

// Question 10: Understanding const with Arrays in JavaScript

// In JavaScript, when you use const:
// You cannot reassign the variable itself,
// but you CAN change what's inside it if it's an object or array

// Question 11: Can you change what's inside a const array?
const numbers = [1, 2, 3, 4];
numbers.pop(); // Removes the last number (4)
console.log(numbers); // Output: [1, 2, 3]
// Yes, you can change the content of a const array

// Question 12: Can you reassign a const array?
const myArray = [];
myArray = [1, 2, 3]; // Error: Assignment to constant variable
// No, you cannot reassign a const variable

// Question 13: What if you want to reassign the array?
let anotherArray = [];
anotherArray = [1, 2, 3]; // Works fine
// Use let instead of const if you need to reassign the variable
