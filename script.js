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

let proImg = document.querySelectorAll('#pro-img');
proImg.forEach((e) => {
    e.addEventListener("click",(n) => {

        var img = n.target.parentNode.childNodes[1].src;
        var name = n.target.parentNode.childNodes[3].innerText;
        var description = n.target.parentNode.childNodes[5].innerText;
        var price = n.target.parentNode.childNodes[7].innerText;
        
            console.log(img);
            console.log(name);
            console.log(description);
            console.log(price);

            // window.open('http://127.0.0.1:5500/proPage.html');

            // document.querySelector('#selected-pro-img').src = img;
            // document.querySelector('#selected-pro-price').innerText = price;
            // document.querySelector('#selected-pro-name').innerText = name;
            // document.querySelector('#selected-pro-des').innerText = description;

            // console.log(document.querySelector('#selected-pro-price').innerText);
            // console.log(document.querySelector('#selected-pro-name').innerText);
            // console.log(document.querySelector('#selected-pro-des').innerText);
        
    })
})

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

//             document.querySelector('#selected-pro-img')
//             .addEventListener("click",()=>{
//                 console.log("image clicked");
//             })
//             document.querySelector('#selected-pro-price')
//             .addEventListener("click",()=>{
//                 console.log("price clicked");
//             })
//             document.querySelector('#selected-pro-name')
//             .addEventListener("click",()=>{
//                 console.log("name clicked");
//             })
//             document.querySelector('#selected-pro-des')
//             .addEventListener("click",()=>{
//                 console.log("description clicked");
//             })

// function click(params) {
//     console.log("button clicked");
// }

//worked upto here