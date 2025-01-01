import React from 'react'

export default function Product({ props, onClickProduct }) {
    const handleClick = () => {
        onClickProduct(props.productId)
    }
    return (
        <div className="item" onClick={handleClick}>
            <div className="item-anchor">
                <div className="item-image">
                    <img className="image" src={props.image} alt="item"></img>
                </div>
                <div className="item-name">{props.productName}</div>
                <div className="item-price">${props.price}</div>
            </div>
        </div>
    )
}
