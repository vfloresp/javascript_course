
const myFunc = (callback) =>{
    let value = 50;
    callback(value);
}

myFunc((value) =>console.log(value));

const ul = document.querySelector('.people');

let people = ['mario','luigi','ryu','shaun'];

let html = '';
people.forEach((person,index) => {
    console.log(index,person);
    //create html remplate
    html += `<li style="color:purple";>${person}</li>`;
});

ul.innerHTML = html;