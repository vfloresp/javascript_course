
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.google.com')
link.innerText = 'Go to google';

const mssg = document.querySelector('p.error');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');

mssg.setAttribute('style','color:green;');

const title = document.querySelector('h1');

//title.setAttribute('style','margin:50px;');
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';

title.style.fontSize = '60px';

title.style.margin = '';