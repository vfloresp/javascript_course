const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value);
    //console.log(form.username.value);
    //validation
    const name = form.username.value;
    
    if(usernamePattern.test(name)){
        feedback.textContent = 'that username is valid'
    }else{
        feedback.textContent ='that username is invalid'
    }

})


//live feedback
form.username.addEventListener('keyup',e => {
    //console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','success');
    }else{
        form.username.setAttribute('class','error');
    }
})




//testing RegExp
const username = 'shaunpgfd';
const pattern = /^[a-z]{6,}$/;

let res = pattern.test(username);
console.log(res);

if(res){
    console.log('The regex test passed');
}else{
    console.log('regex test failed');
}

let result = username.search(pattern);
console.log(result);