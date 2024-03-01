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
            // alert('login First');
            window.location.href = "#login"
        }
        
    })
})

let proName = document.querySelectorAll('#pro-name');
let proDes = document.querySelectorAll('#pro-des');
let proPrice = document.querySelectorAll('#pro-price');

let buyButton = document.querySelectorAll('#buy-btn');
buyButton.forEach((e) => {
    e.addEventListener("click",(n) => {
        if (isUserLogged) {
            console.log(n.target.parentNode);

            window.open('http://127.0.0.1:5500/proPage.html');

            document.querySelector('selected-pro-price')
            .innerHTML = e.proPrice;
            document.querySelector('selected-pro-name')
            .innerHTML = e.proName;
            document.querySelectorAll('selected-pro-des')
            .innerHTML = e.proDes;

        } else {
            console.log("login First");
            // alert('login First');
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
