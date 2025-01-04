import React from "react";
import Product from "./elements/Product";

function Home({ products, onClickDetail, keyword }) {
    const filteredProducts = keyword ?
        products.filter(product => product.productName.toLowerCase().includes(keyword.toLowerCase())) 
        : products
    return (
        <div className="item-list">
            {filteredProducts.map(product => {
                return <Product
                    key={product.productId}
                    props={product}
                    onClickProduct={onClickDetail}
                />
            })}
        </div>
    )
}

export default Home;