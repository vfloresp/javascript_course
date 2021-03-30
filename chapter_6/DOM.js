
const para = document.querySelector('body > h1');

console.log(para);

const paras = document.querySelectorAll('p');

paras.forEach(para =>{
    console.log(para);
});

console.log(paras);

const errors = document.querySelectorAll('.error');

console.log(errors);

//get an element by index
const title = document.getElementById('page-title');
console.log(title);

//get elements by their class name
const errors2 = document.getElementsByClassName('error');
console.log(errors2);
console.log(errors2[0]);

//get elements by their tag name
const paras2 = document.getElementsByTagName('p');
console.log(paras2);