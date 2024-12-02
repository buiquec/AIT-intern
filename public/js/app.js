import indexController from "../controller/index-controller.js";
import cartController from "../controller/cart-controller.js";
// create an empty array
document.addEventListener('DOMContentLoaded', () => {
    showProducts()
    cartController.renderCartNumber()
})
let productList = []
async function showProducts() {
    const list = document.querySelector('.item-list')
    productList = await indexController.getAll()
    list.innerHTML = productList.map((product) => {
        return `
        <div class="item">
            <a class="item-anchor" href="/products/${product.productId}">
            <div class="item-image">
                <img class="image" src="${product.image}" alt="item">
            </div>
            <div class="item-name">${product.productName}</div>
            <div class="item-price">$${product.price}</div>
            </a>
        </div>`
    }).join(" ")
}


//render detail page


//adding to Cart


//render cart page
function renderCart() {
    const cartList = document.querySelector('.cart-list')
    const cartTotal = document.querySelector('.cart-total')
    let totalPrice = 0;
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.forEach(item => {
        fetch(`http://localhost:4080/api/products/${item.productId}`)
            .then(res => res.json())
            .then(res => {
                const cartItem = document.createElement('div')
                cartItem.innerHTML = `
            <div class="cart-item">
                <input type="checkbox" name="item" onclick="checkItem(${item.productId})">
                <img class="item-cart-image" src="${res.image}" alt="">
                <div class="item-cart-title">${res.productName}</div>
                <div class="item-cart-info">$${res.price}</div>
                <div class="item-cart-info">${item.quantity}</div>
                <button onclick="removeItem(${item.productId})">Remove</button>
            </div>
            `
                cartList.appendChild(cartItem)
                totalPrice += res.price * item.quantity
                cartTotal.innerText = `The total price is: $${totalPrice}`
            })
    })
}
function removeItem(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    newCart = cart.filter(item => {
        return item.productId != id
    })
    localStorage.setItem('cart', JSON.stringify(newCart))
    alert("Item removed")
    window.location.reload()
}
function checkItem(id) {
    console.log(`Item ${id} is checked`)
}