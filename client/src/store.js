import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/search/searchSlice'
import renderReducer from'./features/render/renderSlice'
import cartReducer from './features/cart/cartSlice'
import { loadFromLocalStorage, saveToLocalStorage } from "./utils/localStorage";

const preloadedState = {
    cart: loadFromLocalStorage()
}

const store = configureStore({
    reducer: {
        search: searchReducer,
        render: renderReducer,
        cart: cartReducer
    }, 
    preloadedState
})

let prevCartState = store.getState().cart;

store.subscribe(() => {
  const currentCartState = store.getState().cart;

  if (prevCartState !== currentCartState) {
    saveToLocalStorage(currentCartState)
    prevCartState = currentCartState;
  }
})
export default store