const cartUtils = {
    cartItemNumber: JSON.parse(localStorage.getItem('cart')) || [],
    cartDOM: document.querySelector('.span'),
    setCartItem: function(data) {
        localStorage.setItem('cart', JSON.stringify(data))
    }
}
export default cartUtils