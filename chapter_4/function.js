
//function declaration
function greet(){
    console.log('hello world');
}

//function expression
const speak = function(name = 'luigi', time= 'night'){
    console.log(`good ${time} ${name}`);
};

greet();

speak('chuchito', 'morning');
speak();

const calcArea = function(radius){
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log(area);

const calcVol = function(area){

};

calcVol(area);

//Arrow funcionts
const calcArea2 = radius => 3.14 * radius ** 2;

const area2 = calcArea2(7);
console.log(area2);

const greet2 = () => 'Hello Worlds';

const bill = (products, tax) =>{
    let total = 0;
    for(let i = 0; i <products.length; i++) {
        total += products[i] + products[i]*tax;
    }

    return total;
};

console.log(bill([43,65,32],0.2));
