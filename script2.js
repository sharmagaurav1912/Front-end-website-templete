
document.getElementById('selected-pro-img')
.addEventListener("click", ()=>{
    console.log("image clicked");
    console.log(proImg);
})

document.getElementById('selected-pro-price')
.addEventListener("click", ()=>{
    console.log("price clicked");
    console.log(proPrice);
})

document.getElementById('selected-pro-name')
.addEventListener("click", ()=>{
    console.log("name clicked");
    console.log(proName);
})

document.getElementById('selected-pro-des')
.addEventListener("click", ()=>{
    console.log("des clicked");
    console.log(proDescription);
})


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