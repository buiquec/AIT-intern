import cartUtils from "../utils/cart-utils.js";
class CartController {
    getCartItem = () => {
        return cartUtils.cartItemNumber // get array
    }
    getCartDOM = () => {
        return cartUtils.cartDOM
    }
    renderCartNumber = () => {
        return cartUtils.cartNumberDOM.innerText = this.getCartItem().length; // get number
    }
    addToCart = (id, quantity) => {
        const cart = this.getCartItem() // get array
        let itemExists = false

        cart.forEach(item => {
            if (item.productId === id) {
                item.quantity += quantity
                itemExists = true
                cartUtils.setCartItem(cart)
            }
        });
        if (!itemExists) {
            cart.push({ productId: id, quantity })
            cartUtils.setCartItem(cart)
        }
    }
    removeFromCart = (id) => {
        const cart = this.getCartItem()
        cart.forEach((item, index) => {
            if (item.productId == id) {
                cart.splice(index, 1)
            }
        })     
        cartUtils.setCartItem(cart)
    }
    calculatePrice = (arr) => { // takes in an array of checked items
        return arr.reduce((total, item) => {
            total += parseFloat(item.itemPrice) * parseInt(item.itemQuantity) 
            return total
        }, 0)
    }
}

export default new CartController()