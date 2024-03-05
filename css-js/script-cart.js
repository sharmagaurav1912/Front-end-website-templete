///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product loading script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded',
async function getData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    var productID = localStorage.getItem('product-id')
    let pro = data.products[productID];

            let proCont = document.getElementById("cart-pro-container");
            let product = document.createElement('div');
            product.classList.add('row')
            product.id = "cart-product";
            product.innerHTML = `

            <div class="col-lg-1 col-sm-4 border">
                <img src="${pro.thumbnail}" alt="" id="cart-pro-img">
            </div>
            <div class="col-lg-5 col-sm-8 border py-2">
                <span id="cart-product-name">${pro.title}</span>
                <br>
                <span id="cart-product-des">${pro.description}</span>
            </div>
            <div class="col-lg-2 col-sm-4 border py-2">
                <span id="cart-product-price">₹${pro.price}/-</span>
            </div>
            <div class="col-lg-2 col-sm-4 border py-2">
                <input type="number" id="cart-pro-quantity" value="1" class="w-100">
            </div>
            <div class="col-lg-2 col-sm-4 border py-2">
                <span id="cart-product-total">Total</span>
            </div>
            
            `;

            
            proCont.appendChild(product);
            
            let proQuantity = document.getElementById('cart-pro-quantity');
            let proTotal = document.getElementById('cart-product-total');
    
            proTotal.textContent = `₹${proQuantity.value * pro.price}/-`;
        }  

    );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// dark mode script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let productContainer = document.querySelectorAll('cart-div')
let lightTheme = true;
let themeImg = document.getElementById('theme-img');
themeImg.addEventListener("click",()=>{   
    let body = document.querySelector('body');

    if (lightTheme) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        themeImg.src="img/sun.png";
        lightTheme = false;

        document.getElementById('productContainer')
        .classList.add('bg-dark')
        document.getElementById('productContainer')
        .classList.add('text-white')
    }
    
    else{     
        body.style.backgroundColor = "white";
        body.style.color = "black";  
        themeImg.src="img/crescent-moon.png";
        lightTheme = true; 

        document.getElementById('productContainer')
        .classList.remove('bg-dark')
        document.getElementById('productContainer')
        .classList.remove('text-white')
    }
})




