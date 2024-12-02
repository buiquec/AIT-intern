import cartUtils from "../utils/cart-utils.js";
class CartController {
    renderCartNumber = () => {
        return cartUtils.cartDOM.innerText = cartUtils.cartItemNumber.length;
    }
    addToCart = (id, quantity) => {
        const cart = cartUtils.cartItemNumber
        cart.push({ productId: id, quantity })
        cartUtils.setCartItem(cart)
    }
    getCartItem = () => {
        return cartUtils.cartItemNumber
    }
}

export default new CartController()