
const paras = document.querySelectorAll('p');

let text = '';
paras.forEach(para => {
    text = para.innerText;
    console.log(text);
    if(text.includes('error')){
        para.classList.add('error');
    }else if(text.includes('success')){
        para.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');

//para.textContent returns all content regardless if it is visible