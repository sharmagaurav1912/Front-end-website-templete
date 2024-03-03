document.getElementById('buy-now-btn')
.addEventListener("click",()=>{
    console.log("clicked");
})

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
        // productPage.style.backgroundColor = "black";
        // productPage.style.color = "white";
        themeImg.src="sun.png";
        lightTheme = false;
    }
    
    else{     
        body.style.backgroundColor = "white";
        body.style.color = "black";  
        // productPage.style.backgroundColor = "white";
        // productPage.style.color = "black";
        themeImg.src="crescent-moon.png";
        lightTheme = true; 
    }
})



