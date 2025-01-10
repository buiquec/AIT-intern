import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        getLength(cart) {
            return cart.length
        },
        addProductToCart(cart, action) {
            const { productId, quantity } = action.payload
            const existingItem = cart.some(item => item.productId === productId)
            if (existingItem) {
                return cart.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: +(item.quantity) + +(quantity) }
                        : item
                )
            } else {
                return [...cart, action.payload]
            }
        },
        removeProductFromCart(cart, action) {
            const id = action.payload.productId
            return cart.filter(item => item.productId !== id)
        },
        clearCart(cart) {
            cart = []
        }
    }
})

export const { getLength, addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer