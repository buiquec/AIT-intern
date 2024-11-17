// create an empty array
let productList = [];
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelector('.span')
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cartItems.textContent = cart.length
    if (document.querySelector('.item-list')) {
        renderHomepage()
    } else if (document.querySelector('.item-detail')) {
        renderDetailPage()
    } else if (document.querySelector('.cart-list')) {
        renderCart()
    }
})


//render home page
function renderHomepage() {
    fetch('http://localhost:4080/api/products')
        .then(res => res.json())
        .then((res) => {
            productList = res;
            loadProducts()
        })
        .catch(e => console.log(e))
}

function loadProducts() {
    const list = document.querySelector('.item-list')
    if (productList.length > 0) {
        productList.forEach((product) => {
            const item = document.createElement('div')
            item.classList.add('item')
            item.innerHTML = `
        <a class="item-anchor" href="/products/${product.productId}">
        <div class="item-image">
            <img class="image" src="${product.image}" alt="item">
        </div>
        <div class="item-name">${product.productName}</div>
        <div class="item-price">$${product.price}</div>
        </a>
        `
            list.appendChild(item)
        })
    }
}
//render detail page
function renderDetailPage() {
    const url = window.location.pathname
    const params = url.split('/').pop()
    fetch(`http://localhost:4080/api/products/${params}`)
        .then(res => res.json())
        .then((res) => {
            productList.push(res);
            loadDetailProducts()
        })
        .catch(e => console.log(e))
}

function loadDetailProducts() {
    const detail = document.querySelector('.item-detail')
        productList.forEach((product) => {
            const itemDetail = document.createElement('div')
            itemDetail.classList.add('item-detail-flex')
            itemDetail.innerHTML = `
                <div class="item-media">
                    <img class="item-detail-image" src="${product.image}" alt="Item-detail">
                </div>
                <div class="item-info">
                    <div class="item-detail-title"><h1>${product.productName}</h1></div>
                    <div class="item-detail-price">$${product.price}</div>
                    <div class="item-description">${product.description}</div>
                    <div class="add-cart-form">
                            <p>Choose amount: </p>
                            <input type="number" id="quantity" min="1" value="1" max="10">
                        <button onclick="addToCart(${product.productId})">Add to Cart</button>
                    </div>
                </div>
        `
            detail.appendChild(itemDetail)
        })
}
//adding to Cart
function addToCart(productId) {
    const quantity = parseInt(document.getElementById('quantity').value)
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push({productId, quantity})
    localStorage.setItem('cart', JSON.stringify(cart))
    const cartItems = document.querySelector('.span')
    cartItems.textContent = cart.length
    alert('Item added to cart')
}

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