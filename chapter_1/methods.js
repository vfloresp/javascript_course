
//Strings
let email = 'chuchito@chich.com'

let result = email.lastIndexOf('h');

result = email.slice(0,10);

result = email.substr(0,5)

result = email.replace('h','k');

console.log(result);

//Numbers
let radius = 10;
const pi = 3.14;

//math operators +, -, *, / , **, %
result = radius % 3;
console.log(result);

result = pi * radius ** 2;
console.log(result);

//Order of operations B I D M A S

let likes = 10;
likes++;
likes += 5;
likes *=2;
console.log(likes);

//NaN - not a Number
console.log(5/'hello');

result = 'The blog has '+ likes + ' likes';
console.log(result);