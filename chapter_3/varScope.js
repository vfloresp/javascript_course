
let age = 30;


if(true) {
    let age = 40;
    let name = 'Shaun'
    console.log('inside code block ', age, name);
    
    if(true) {
        let age = 50;
        console.log('inside second code block', age, name);
    }
}


console.log('outside code block ', age, name);