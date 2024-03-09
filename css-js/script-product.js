isUserLogged = true;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product loading script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded',
async function fetchData(e) {
    e.preventDefault;
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

            var productID = localStorage.getItem('product-id')
            let pro = data.products[productID];
            console.log(pro);
            console.log(productID);
            console.log("load successful");

            document.getElementById('selected-pro-img')
            .src = pro.thumbnail;
            document.getElementById('selected-pro-name')
            .innerText = pro.title;
            document.getElementById('selected-pro-des')
            .innerText = pro.description;
            document.getElementById('selected-pro-price')
            .innerText = "₹ " + pro.price + "/-";
            document.getElementById('selected-pro-brand')
            .innerText = pro.brand;
            document.getElementById('selected-pro-category')
            .innerText = pro.category;
            document.getElementById('selected-pro-rating')
            .innerText = pro.rating;
            document.getElementById('selected-pro-stock')
            .innerText = "Stock : " + pro.stock;

            document.getElementById('pro-cont')
            .addEventListener("click", (n) => {
                if (n.target.id == "cart-btn-buy") {
                    console.log("buy button clicked");
                    if (isUserLogged) {
                        localStorage.setItem('product-id',productID);
                        localStorage.setItem('product-json',pro);
                        window.location.href = './checkout.html';
                        
                    } else {
                        console.log("login First");
                        window.location.href = './login.html';
                    }
                }
                else if(n.target.id === "cart-btn-cart") {
                    console.log("cart button clicked");
                    if (isUserLogged) {
                        localStorage.setItem('product-id',productID);
                        localStorage.setItem('product-json',pro);
                        window.location.href = './cart.html';
                        
                    } else {
                        console.log("login First");
                        window.location.href = './login.html';
                    }
                }

                
            })
            
        }  
    );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// dark mode script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var activeTheme = localStorage.getItem('theme-preference');

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

        document.getElementById('product-page')
        .classList.add('bg-dark')
        document.getElementById('product-page')
        .classList.add('text-white')
    }
    
    else{     
        body.style.backgroundColor = "white";
        body.style.color = "black";  
        // productPage.style.backgroundColor = "white";
        // productPage.style.color = "black";
        themeImg.src="img/crescent-moon.png";
        lightTheme = true; 

        document.getElementById('product-page')
        .classList.remove('bg-dark')
        document.getElementById('product-page')
        .classList.remove('text-white')
    }
})

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // buy button script
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var isUserLogged = localStorage.getItem('isUserLogged');

// document.getElementById('cart-btn-buy')
// .addEventListener("click", () => {
//     console.log(" buy button clicked");

//     if (isUserLogged) {
//         // console.log("wait.. opening buy now page");
//         window.location.href = "./checkout.html";
//         // console.log(window.location);
//     } else {
//         console.log("login First");
//         // alert('login First');
//         // console.log(window.location);
//         localStorage.setItem('location',window.location);
//         window.location.href = "./login.html";
//     }
// })

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // cart button script
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.getElementById('cart-btn-cart')
// .addEventListener("click", (n) => {
//     console.log(" cart button clicked");

//     if (isUserLogged) {
//         // console.log(n.target.parentNode.id);
//         // count ++;
//         // cartCount.innerText = count;
//         // console.log("cart count incremented");

//         console.log(pro);

//         // id = n.target.parentNode.id;
//         // localStorage.setItem('product-id',id);
//         // window.location.href = "./cart.html";
//         // console.log(window.location);

//     } else {
//         // console.log("login First");
//         // // console.log(window.location);
//         // localStorage.setItem('location',window.location);
//         // window.location.href = "./login.html";
//     }
// })