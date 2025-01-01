import React from 'react'

export default function Detail({ clickedId, products }) {
    const product = products.find(product => +(product.productId) === clickedId)
    return (
        <div className="item-detail-flex">
            <div className="item-media">
                <img className="item-detail-image" src={product.image} alt="Item-detail"></img>
            </div>
            <div className="item-info">
                <div className="item-detail-title"><h1>{product.productName}</h1></div>
                <div className="item-detail-price">${product.price}</div>
                <div className="item-description">{product.description}</div>
                <div className="add-cart-form">
                    <p>Choose amount: </p>
                    <input type="number" id="quantity" min="1" defaultValue="1" max="10"></input>
                    <button id="add-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
