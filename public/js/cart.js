import cartController from "../controller/cart-controller.js"

export async function renderCart(productList = []) {
    try {
        //render cart
        const cartItems = await cartController.getCartItem()
        const cartList = document.querySelector('.cart-list')
        cartList.innerHTML = cartItems.map(item => {
            const cartProduct = productList.find(product => product.productId == item.productId)
            return `
                <div class="cart-item">
                    <input class="cart-item-checkbox" type="checkbox" name="item" 
                        data-id-check="${cartProduct.productId}"
                        data-quantity-check="${item.quantity}"
                        data-price-check="${cartProduct.price}">
                    <img class="item-cart-image" src="${cartProduct.image}" alt="">
                    <div class="item-cart-title">${cartProduct.productName}</div>
                    <div class="item-cart-info">$${cartProduct.price}</div>
                    <div class="item-cart-info">${item.quantity}</div>
                    <button class="cart-remove-btn" data-id="${cartProduct.productId}">Remove</button>
                </div>
                `
        }).join(' ') +
            `<div class="cart-total">
                <h1 class="total-price-title"></h1>
            </div>`
        // remove item
        const cartItemElements = document.querySelectorAll('.cart-remove-btn')
        cartItemElements.forEach(element => {
            element.addEventListener('click', async () => {
                const productId = element.getAttribute('data-id')
                cartController.removeFromCart(productId)
                alert('Item removed from cart')
                cartController.renderCartNumber()
                await renderCart(productList)
            })
        })
        // check item
        let checkedItems = []
        const itemCheckboxes = document.querySelectorAll('.cart-item-checkbox')
        itemCheckboxes.forEach(box => {
            box.addEventListener('change', async () => {
                const productId = box.getAttribute('data-id-check')
                const itemQuantity = box.getAttribute('data-quantity-check')
                const itemPrice = box.getAttribute('data-price-check')
                if (box.checked) {
                    // Add item if it's checked and not already in the array
                    if (!checkedItems.some(item => item.productId === productId)) {
                        checkedItems.push({ productId, itemQuantity, itemPrice });
                    }
                } else {
                    // Remove item if it's unchecked
                    checkedItems = checkedItems.filter(item => item.productId !== productId);
                }
                const totalPrice = cartController.calculatePrice(checkedItems)
                const priceDOM = document.querySelector('.total-price-title')
                priceDOM.innerHTML = `The total price is: $${totalPrice}`
                console.log(totalPrice)
            })
        })
    } catch (error) {
        console.log(error)
    }
}

