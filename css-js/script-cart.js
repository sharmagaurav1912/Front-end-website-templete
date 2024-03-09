///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product loading script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let totalAmount = 0;
let tax = 5;
let grandTotal = 0;

document.addEventListener('DOMContentLoaded',
async function getData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    var productID = localStorage.getItem('product-id')
    let pro = data.products[productID];

            let proCont = document.getElementById("cart-pro-container");
            let product = document.createElement('div');
            product.classList.add('row')
            product.classList.add('bg-light')

            product.id = "cart-product";
            product.innerHTML = `

            <div class="col-lg-1 col-sm-4 border">
                <img src="${pro.thumbnail}" alt="" id="cart-pro-img">
            </div>
            <div class="col-lg-5 col-sm-8 py-2">
                <span id="cart-product-name">${pro.title}</span>
                <br>
                <span id="cart-product-des">${pro.description}</span>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 py-2">
                <span id="cart-product-price">₹${pro.price}/-</span>
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 py-2">
                <input type="number" id="cart-pro-quantity" value="1" class="w-100">
            </div>
            <div class="col-lg-2 col-md-4 col-sm-4 py-2">
                <span id="cart-pro-total">Total</span>
            </div>
            
            `;

            
            proCont.appendChild(product);

            // console.log(pro.price);
            
            let proQuantity = document.getElementById('cart-pro-quantity');
            let proTotal = document.getElementById('cart-pro-total');
    
            proTotal.innerText = `₹ ${pro.price} /-`;
            // proTotal.innerText = `₹${proQuantity.value * pro.price}/-`;

            document.getElementById('total-amount')
            .innerText = `Total Amont - ₹${totalAmount}/-`;

            document.getElementById('amount-tax')
            .innerText = `Payable Tax - ${tax}%`;

            document.getElementById('grand-total')
            .innerText = `Grand Total - ₹${grandTotal}/-`
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

        // document.getElementById('cart-nav')
        // .classList.add('bg-dark');
        // document.getElementById('cart-nav')
        // .classList.add('text-white');

        document.getElementById('cart-product')
        .classList.remove('bg-light');

        document.getElementById('cart-product')
        .classList.add('bg-dark');
        document.getElementById('cart-product')
        .classList.add('text-white');

        document.getElementById('cart-total')
        .classList.add('bg-dark');
        document.getElementById('cart-total')
        .classList.add('text-white');

        // document.querySelector('#cart-nav','#cart-product','#cart-total')
        // .classList.add('bg-dark');
        // document.querySelector('#cart-nav','#cart-product','#cart-total')
        // .classList.add('text-white');
    }
    
    else{     
        body.style.backgroundColor = "white";
        body.style.color = "black";  
        themeImg.src="img/crescent-moon.png";
        lightTheme = true; 

        // document.getElementById('cart-nav')
        // .classList.remove('bg-dark');
        // document.getElementById('cart-nav')
        // .classList.remove('text-white');

        document.getElementById('cart-product')
        .classList.add('bg-light');

        document.getElementById('cart-product')
        .classList.remove('bg-dark');
        document.getElementById('cart-product')
        .classList.remove('text-white');

        document.getElementById('cart-total')
        .classList.remove('bg-dark');
        document.getElementById('cart-total')
        .classList.remove('text-white');

        // document.querySelector('#cart-nav','#cart-product','#cart-total')
        // .classList.remove('bg-dark');
        // document.querySelector('#cart-nav','#cart-product','#cart-total')
        // .classList.remove('text-white');
    }
})
