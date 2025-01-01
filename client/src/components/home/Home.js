import React from "react";
import Product from "./elements/Product";

function Home({ products, onClickDetail }) {
    
    return (
        <div className="item-list">
            {products.map(product => {
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