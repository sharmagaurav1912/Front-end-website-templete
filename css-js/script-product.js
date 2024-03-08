
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product loading script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded',
async function fetchData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
        // console.log(data);

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
