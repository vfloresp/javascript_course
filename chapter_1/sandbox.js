alert('hello, world');
console.log('hello, world')

// explicacion definicion variables
let age = 25;
let year = 2020;

console.log(age,year);

age = 30;
console.log(age);

const points = 14;
console.log(points);

var score = 75;
console.log(score);

//-------------------------
//strings
//-------------------------
console.log('hello, world');
let email = 'thisemail@email.com'

//concatenation
let firstName = 'Chuchito';
let lastName = 'Perez';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0])

//String length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

let index = email.indexOf('@');
console.log(index);