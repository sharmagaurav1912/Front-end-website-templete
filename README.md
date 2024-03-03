# Front-end-website
Simple Front End website using html and css fully responsive on all size display.
templete used for further projects..

just data need to be changed.

// getData(productID)

        // fetch('https://dummyjson.com/products')
        // .then(res => res.json())
        // .then( console.log(res.products[1]));

        // async function getData(proID) {
        //     const response = await fetch('https://dummyjson.com/products');
        //     const data = await response.json();
        //     console.log(data);
        // }

        // async function getData(productID) {
        //     const response = await fetch('https://dummyjson.com/products');
        //     const product = await response.json();

        //     var selectedProduct = product.products[productID];
        //     console.log(selectedProduct);
        // }

        // var proImg = n.target.parentNode.childNodes[1].src;
        // var proName = n.target.parentNode.childNodes[3].innerText;
        // var proDescription = n.target.parentNode.childNodes[5].innerText;
        // var proPrice = n.target.parentNode.childNodes[7].innerText;
        
            // console.log(proImg);
            // console.log(proName);
            // console.log(proDescription);
            // console.log(proPrice);

            // window.location = './ProductPage.html';
            
            // document.getElementById('selected-pro-img').src = img;
            // document.getElementById('selected-pro-price').innerText = price;
            // document.getElementById('selected-pro-name').innerText = name;
            // document.getElementById('selected-pro-des').innerText = description;





// document.getElementById('selected-pro-img')
// .addEventListener("click", ()=>{
//     console.log("image clicked");
//     console.log(proImg);
// })

// document.getElementById('selected-pro-price')
// .addEventListener("click", ()=>{
//     console.log("price clicked");
//     console.log(proPrice);
// })

// document.getElementById('selected-pro-name')
// .addEventListener("click", ()=>{
//     console.log("name clicked");
//     console.log(proName);
// })

// document.getElementById('selected-pro-des')
// .addEventListener("click", ()=>{
//     console.log("des clicked");
//     console.log(proDescription);
// })


// var proImg = n.target.parentNode.childNodes[1].src;
// var proName = n.target.parentNode.childNodes[3].innerText;
// var proDescription = n.target.parentNode.childNodes[5].innerText;
// var proPrice = n.target.parentNode.childNodes[7].innerText;

// console.log(proImg);
// console.log(proName);
// console.log(proDescription);
// console.log(proPrice);


// var img = n.target.parentNode.childNodes[1].src;
// var name = n.target.parentNode.childNodes[3].innerText;
// var description = n.target.parentNode.childNodes[5].innerText;
// var price = n.target.parentNode.childNodes[7].innerText;
        
// document.getElementById('selected-pro-img').src = img;
// document.getElementById('selected-pro-price').innerText = price;
// document.getElementById('selected-pro-name').innerText = name;
// document.getElementById('selected-pro-des').innerText = description;


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
// product page script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let proImg = document.querySelectorAll('#pro-img');
proImg.forEach((e) => {
    e.addEventListener("click",(n) => {

        var productID = n.target.parentNode.id;
        console.log(productID);
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