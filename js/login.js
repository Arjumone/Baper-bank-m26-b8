// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
// step-2:get the email address inside the email input field
    // always remember to use .value to get text from an input field
 const inputEmail = document.getElementById('input-email');
    const email = inputEmail.value;

// step-3:get password
// 3.a: set id on the html element
// 3.b: get the element
// 3.c: get the value from the element
const inputPassword = document.getElementById('input-password')
    const password = inputPassword.value;

//DANGER: do not verify email password on the client side 
// step-4: verify email and password
    if(email=== 'arju@gmail.com'&& password === '123'){
        // console.log('valid user');
        window.location.href = 'bank.html';
    }
    else{
        // console.log('invalid user');
        alert('you are wrong!!!')
    }
})