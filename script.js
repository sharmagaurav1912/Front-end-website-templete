let isUserLogged = false;
let count = 0;

let cartCount = document.getElementById('cart-count');
cartCount.innerText = count;
// cartCount.classList.add('display');

let cartButton = document.querySelectorAll('#cart-btn');
cartButton.forEach((e) => {
    e.addEventListener("click",(n) => {

        if (isUserLogged) {
            console.log(n.target);
            // cartCount.style.display = "";
            count ++;
            cartCount.innerText = count;
        } else {
            console.log("login First");
            window.location.href = "#login"
        }
        
    })
})

let buyButton = document.querySelectorAll('#buy-btn');
buyButton.forEach((e) => {
    e.addEventListener("click",(n) => {

        if (isUserLogged) {
            console.log(n.target);
        } else {
            console.log("login First");
            window.location.href = "#login"
        }
        
    })
})

let login = document.getElementById('login');
login.addEventListener("click",() => {

    if (isUserLogged) {
        login.innerText = "login";
        console.log("logout successful");
        // cartCount.classList.remove('display');
        isUserLogged = false;
        count = 0;
        cartCount.innerText = count;

    } else {
        isUserLogged = true;
        console.log("login successful");
        login.innerText = "logout";
    }
    
})
