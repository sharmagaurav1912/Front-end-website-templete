document.addEventListener('DOMContentLoaded',
async function getData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
        // console.log(data);

        for (let i = 0; i < 100; i++) {
            let pro = data.products[i];
            // console.log(pro);
            // console.log("load successful");
            let proCont = document.getElementById("product-container");
            let product = document.createElement('div');
            product.classList.add('product')
            product.id = 'product-'+i;
            product.classList.add('col-lg-3');
            product.classList.add('col-md-4');
            product.classList.add('col-sm-6');
            product.innerHTML = `

            <img src="box.png" id="pro-img" alt="${pro.title}">
            <h5 id="pro-name" class="mt-2">${pro.title}</h5>
            <h6 id="pro-des">${pro.description}</h6>
            <span id="pro-price">${pro.price}</span><br>
            <button class="border-0 bg-primary rounded text-white px-2 py-1" id="buy-btn">Buy Now</button>
            <button class="border-0 bg-success rounded text-white px-2 py-1" id="cart-btn">Add to Cart</button>`

            proCont.appendChild(product);

        }    
    }
);

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

        var productID = n.target.parentNode.id;
        console.log(productID);
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

 
