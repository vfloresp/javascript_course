
const age = 25;

if(age > 20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun','ryu', 'chu-lin'];

if(ninjas.length > 2){
    console.log("that's a lot of ninjas");
}

const password = 'pas@aa';

if(password.length >= 12 && password.includes('@')){
    console.log("this password is very strong");
}else if(password.length >= 8 || password.includes('@') && password.length>5){
    console.log('that password is strong enough');
}else{
    console.log('that password is not long enough');
}

//Logical NOT

let user = false;

if(!user){
    console.log(user);
}