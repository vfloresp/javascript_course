const button = document.querySelector('button');
let ul = document.querySelector('ul');

button.addEventListener('click', ()=>{
    console.log('you clicked me');
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    //ul.append(li);
    ul.prepend(li);
})

//remove object
// const ul = document.querySelector('ul');
// ul.remove();


// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click',e => {
//         console.log(e.target);
//         //e.target.style.textDecoration = 'line-through';
//         console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     })
// })

ul.addEventListener('click',e => {
    //console.log('event in UL');
    console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})