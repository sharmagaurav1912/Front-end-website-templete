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
        console.log("okay");
        window.location.href = "./index.html"; 
    }
})

document.querySelectorAll('#pro-img')
.forEach((e)=>{
    e.addEventListener("click",(n)=>{
        console.log(n.target);
    })
})


document.getElementById('buy-now-btn')
.addEventListener("click", () => {
    console.log('clicked');
})



