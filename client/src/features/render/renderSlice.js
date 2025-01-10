import { createSlice } from '@reduxjs/toolkit'
const renderSlice = createSlice({
    name: 'render',
    initialState: {
        display: 'home'
    },
    reducers: {
        renderHome(state) {
            state.display = 'home'
        },
        renderCart(state) {
            state.display = 'cart'
        },
    }
})
export const {renderHome, renderCart} = renderSlice.actions
export default renderSlice.reducer