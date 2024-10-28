let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductsHTML = document.querySelector('.listProduct');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () =>{
    body.classList.toggle('showCart');
})



//Crear metodo para agregar los productos al html desde js
const addDataToHTML = () => {
    listProductsHTML.innerHTML = "";
    if(listProducts.length > 0){
        listProducts.forEach((product) => {
            console.log(product.name);
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `<img src='${product.image}' alt='sillas'>` +
            `<h2>${product.name}</h2>` +
            `<div class="price">${product.price} MXP</div>` +
            `<button class='addCart'>Add To Cart</button>`;
            listProductsHTML.appendChild(newProduct);
        })
    }
}

const initApp = () =>{
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();
        console.log(listProducts);
    })
}

initApp();