///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//login button script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let inputUsername = document.getElementById('input-username');
let inputPassword = document.getElementById('input-password');

let loginButton = document.getElementById('login-btn');
loginButton.addEventListener("click",() => {

    if (inputUsername.value == "" && inputPassword.value == "") {
        console.log("type something");
    } else {
        isUserLogged = true;
        window.location = "http://127.0.0.1:5500/Front-end-website-templete/index.html";   
    }
})