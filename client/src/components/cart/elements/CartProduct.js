import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProductFromCart } from '../../../features/cart/cartSlice'

export default function CartProduct ({cartProduct, item}) {
  const dispatch = useDispatch()
  const handleDeleteCartItem = () => {
    dispatch(removeProductFromCart({productId: item.productId}))
  }
  return (
    <div className="cart-item">
        <input className="cart-item-checkbox" type="checkbox" name="item"></input>
          <img className="item-cart-image" src={cartProduct.image} alt=""></img>
          <div className="item-cart-title">{cartProduct.productName}</div>
          <div className="item-cart-info">${cartProduct.price}</div>
          <div className="item-cart-info">{item.quantity}</div>
          <button className="cart-remove-btn" onClick={handleDeleteCartItem}>Remove</button>
    </div>
  )
}
