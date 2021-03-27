//boolean and comparison
console.log(true, false, "true", "false")

//methods that reutrn boolean
let email = 'chuchito@emailworld.com';
let names = ["mario","Luigi","Bowser"];

let result = email.includes('@');
result = names.includes('Bowser');

console.log(result);

let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);

let name = "shaun";

console.log(name == "shaun");
console.log(name == "Shaun");
console.log(name > "crystal");
console.log(name > "Shaun");

//loose comparison
console.log(age == '25');
console.log(age != '25');


//strict comparison
console.log(age === 25);
console.log(age === "25");
console.log(age !== 25);
console.log(age !== "25");