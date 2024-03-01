///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cart script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let isUserLogged = false;
let count = 0;

let cartCount = document.getElementById('cart-count');
cartCount.innerText = count;

let cartButton = document.querySelectorAll('#cart-btn');
cartButton.forEach((e) => {
    e.addEventListener("click",(n) => {

        if (isUserLogged) {
            console.log(n.target);
            count ++;
            cartCount.innerText = count;
        } else {
            console.log("login First");
            window.location.href = "#login"
        }
        
    })
})






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// buy button script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let buyButton = document.querySelectorAll('#buy-btn');
buyButton.forEach((e) => {
    e.addEventListener("click",(n) => {

        if (isUserLogged) {
            console.log(n.target.parentNode);
            // window.open('http://127.0.0.1:5500/proPage.html');

        } else {
            console.log("login First");
            // alert('login First');
            window.location.href = "#login"
        }
        
    })
})






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product page script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let proImg = document.querySelectorAll('#pro-img');
proImg.forEach((e) => {
    e.addEventListener("click",(n) => {

        var proImg = n.target.parentNode.childNodes[1].src;
        var proName = n.target.parentNode.childNodes[3].innerText;
        var proDescription = n.target.parentNode.childNodes[5].innerText;
        var proPrice = n.target.parentNode.childNodes[7].innerText;
        
            console.log(proImg);
            console.log(proName);
            console.log(proDescription);
            console.log(proPrice);

            window.location = './ProductPage.html';
            
            // document.getElementById('selected-pro-img').src = img;
            // document.getElementById('selected-pro-price').innerText = price;
            // document.getElementById('selected-pro-name').innerText = name;
            // document.getElementById('selected-pro-des').innerText = description;
        })
    })






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//login page script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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






// document.getElementById('selected-pro-img')
// .addEventListener("click", ()=>{
//     console.log("image clicked");
// })
// document.getElementById('selected-pro-price')
// .addEventListener("click", ()=>{
//     console.log("price clicked");
// })
// document.getElementById('selected-pro-name')
// .addEventListener("click", ()=>{
//     console.log("name clicked");
// })
// document.getElementById('selected-pro-des')
// .addEventListener("click", ()=>{
//     console.log("des clicked");
// })