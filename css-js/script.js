
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product loading script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded',
async function getData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
        // console.log(data);

        for (let i = 0; i <= 30; i++) {
            let pro = data.products[i];
            // console.log(pro);
            // console.log("load successful");
            let proCont = document.getElementById("product-container");
            let product = document.createElement('div');
            product.classList.add('product')
            product.id = i;
            product.classList.add('col-lg-3');
            product.classList.add('col-md-4');
            product.classList.add('col-sm-6');
            product.innerHTML = `

            <img src="${pro.thumbnail}" id="pro-img" alt="${pro.title}">
            <h5 id="pro-name" class="mt-2">${pro.title}</h5>
            <h6 id="pro-des">${pro.description}</h6>
            <span id="pro-price">₹${pro.price}/-</span><br>
            <button class="border-0 bg-primary rounded text-white px-2 py-1" id="buy-btn">Buy Now</button>
            <button class="border-0 bg-success rounded text-white px-2 py-1" id="cart-btn">Add to Cart</button>`;

            
            proCont.appendChild(product);
            
        }  
      }
    );





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product Clicking script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let isUserLogged = false;
    let count = 0;

    let cartCount = document.getElementById('cart-count');
    cartCount.innerText = count;


    document.querySelectorAll('#product-container').forEach((e) => {
        e.addEventListener('click', (n) => {

            // console.log(n.target);

            if (n.target.id == 'buy-btn') {
                console.log("buy button clicked");
                if (isUserLogged) {
                    // console.log("wait.. opening buy now page");
                    window.location.href = "./checkout.html"
                } else {
                    console.log("login First");
                    // alert('login First');
                    window.location.href = "./login.html"
                }

            }else if (n.target.id == 'cart-btn') {
                console.log("cart button clicked");
                if (isUserLogged) {
                    // console.log(n.target.parentNode.id);
                    count ++;
                    cartCount.innerText = count;
                    console.log("cart count incremented");

                    id = n.target.parentNode.id;
                    localStorage.setItem('product-id',id);
                    window.location.href = "./cart.html"

                } else {
                    console.log("login First");
                    window.location.href = "./login.html"
                }

            }else if (n.target.id == 'pro-img') {
                console.log("image is clicked");
                displayProduct(n.target.parentNode.id);
            }
            
        });
    });
    
    function displayProduct(id) {
        console.log("i am here again with",id);
        console.log(id);
        
        localStorage.setItem('product-id',id);
        window.location.href = "./ProductPage.html";
    }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//login button script
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

        // window.location.href = "./login.html";
        isUserLogged = true;
        console.log("login successful");
        setTimeout(() => {
            login.innerText = "logout";
        },2000);
    }
    
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//cart button script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cart = document.getElementById('cart');
cart.addEventListener("click",() => {
    
    if (isUserLogged) {
        console.log("cart button clicked");
        window.location.href = "./cart.html";

    } else {
        console.log("login first");
    }
    
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// dark mode script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

