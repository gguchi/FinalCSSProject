let login = document.querySelector(".sign__up");

let inputEmail = document.querySelector(".user__email");
let userEmail = localStorage.getItem('email');

let inputPassword = document.querySelector(".user__password");
let userPassword = localStorage.getItem('password');

login.addEventListener("click", (e) => {

    e.preventDefault();

    if(inputEmail.value == userEmail && inputPassword.value == userPassword){

        alert('successfully logged in!');

    }else{

        alert('invalid email or password.');

    }


})