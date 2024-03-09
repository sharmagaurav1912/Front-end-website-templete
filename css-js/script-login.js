///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//login button script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let inputUsername = document.getElementById('input-username');
let inputPassword = document.getElementById('input-password');

let loginButton = document.getElementById('login-btn');
loginButton.addEventListener("click",() => {

    if (inputUsername.value == "" && inputPassword.value == "") {
        console.log("type something");
        document.getElementById('error-msg')
        .innerText = "Type Something";
    } else {
        console.log("okay");
        isUserLogged = true;
        localStorage.setItem('isUserLogged',isUserLogged);
        var redirectLocation = localStorage.getItem('location');
        window.location.href = redirectLocation; 
    }
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// dark mode script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let productPage = document.getElementById('product-page');
let lightTheme = true;
let themeImg = document.getElementById('theme-img');
themeImg.addEventListener("click",()=>{   
    let body = document.querySelector('body');

    if (lightTheme) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        themeImg.src="img/sun.png";
        lightTheme = false;
    }
    
    else{     
        body.style.backgroundColor = "white";
        body.style.color = "black";  
        themeImg.src="img/crescent-moon.png";
        lightTheme = true; 
    }
})






