import cartController from "../controller/cart-controller.js"

export async function renderDetailPage(products = [], id) {
    try {
        const product = await products.find(product => product.productId == id)
        const detail = document.querySelector('.item-detail')
        detail.innerHTML = `
            <div class="item-detail-flex">
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
                        <button id="add-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `
        
        const btn = document.getElementById('add-btn')
        btn.addEventListener('click', () => {
            const quantity = +(document.getElementById('quantity').value)
            cartController.addToCart(product.productId, quantity)
            alert('Item added to cart')
            cartController.renderCartNumber()
        })

    } catch (error) {
        console.log(error)
    }

}


// function addToCart(productId) {
//     const quantity = parseInt(document.getElementById('quantity').value)
//     let cart = JSON.parse(localStorage.getItem('cart')) || []
//     cart.push({ productId, quantity })
//     localStorage.setItem('cart', JSON.stringify(cart))
//     const cartItems = document.querySelector('.span')
//     cartItems.textContent = cart.length
//     alert('Item added to cart')
//     renderDetailPage()
// }
