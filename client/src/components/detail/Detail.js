import React, { useState } from 'react'
import { addProductToCart } from '../../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

export default function Detail({ clickedId, products, clearClickedId }) {
    const [addedQuantity, setAddedQuantity] = useState(1)
    const product = products.find(product => +(product.productId) === clickedId)
    const dispatch = useDispatch()

    const handleSubmitAddProduct = () => {
        dispatch(addProductToCart({ productId: clickedId, quantity: addedQuantity , price: product.price}))
    }
    return (
        <div className="item-detail-flex">
            <div className="item-media">
                <img className="item-detail-image" src={product.image} alt="Item-detail"></img>
            </div>
            <div className="item-info">
                <div className="item-detail-title">
                    <h1>{product.productName}</h1>
                    <div onClick={clearClickedId}><p>X</p></div>
                </div>
                <div className="item-detail-price">${product.price}</div>
                <div className="item-description">{product.description}</div>
                <div className="add-cart-form">
                    <p>Choose amount: </p>
                    <input type="number" id="quantity" min="1"
                        value={addedQuantity}
                        max="10"
                        onChange={(e) => { setAddedQuantity(+(e.target.value)) }}
                    ></input>
                    <button id="add-btn" onClick={handleSubmitAddProduct}>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}
