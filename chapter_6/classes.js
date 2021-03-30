const content = document.querySelector('p.error');

console.log(content.classList);

content.classList.add('another');
content.classList.remove('error');
content.classList.add('success');