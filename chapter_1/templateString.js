let title = ' Best read of 2019';
const author = 'Mario';
const likes = 30;

let result = ' The blog called '+ title + ' by '+author+ ' has '+likes;

//template string
result = `the blog called ${title} by ${author} has ${likes}  likes`;
console.log(result);

// html template
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes </span>
`;
console.log(html);