const cartUtils = {
    cartItemNumber: JSON.parse(localStorage.getItem('cart')) || [],
    cartNumberDOM: document.querySelector('.span'),
    cartDOM: document.querySelector('.cart'),
    setCartItem: function(data) {
        localStorage.setItem('cart', JSON.stringify(data))
    }
}
export default cartUtils