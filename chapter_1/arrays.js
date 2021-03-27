let ninjas = ['shaun','ryu','chun-li'];

ninjas[1] = 'ken';

console.log(ninjas);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shawn','crystal',30,20];
console.log(random);

//methods
console.log(ninjas.length);
let result = ninjas.join(',');
result = ninjas.indexOf('chun-li');
result = ninjas.concat(['Ken','crystal']);
result = ninjas.push('ken');
result = ninjas.pop();
console.log(result, ninjas);