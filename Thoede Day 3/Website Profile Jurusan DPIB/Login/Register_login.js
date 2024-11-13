var x = document.getElementById("Login");
var y = document.getElementById("Register");
var z = document.getElementById("toggle_btn");

var loginBtn = document.querySelector('button[onclick="Login()"]');
var registerBtn = document.querySelector('button[onclick="Register()"]');

function Register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

    loginBtn.classList.remove('active');  
}

function Login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";

    registerBtn.classList.remove('active');  
    loginBtn.classList.add('active'); 
}