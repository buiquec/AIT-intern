import cartController from "../controller/cart-controller.js"
document.addEventListener("DOMContentLoaded", () => {
    renderCart()
    cartController.renderCartNumber()
})

async function renderCart() {
    const cartItems = await cartController.getCartItem()
    const cartList = document.querySelector('.cart-list')
    cartList.innerHTML = cartItems.map((product) => {
        return ``
    })
}