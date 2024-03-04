
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// dark mode script
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

// document.getElementById('buy-now-btn')
// .addEventListener("click",()=>{
//     console.log("clicked");
// })



