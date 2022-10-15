// Adding javascript styles

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwword2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();  

    checkInput();
})

function checkInput() {
    //Get the value from the user inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {

        SetErrorFor(username, 'username cannot be blank');
    }
    else {
        setSuccessFor(username);
    }
}

function SetErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //Adding of Error Message inside small
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    
 //Adding of Error class
formControl.className = 'form-control success';
}