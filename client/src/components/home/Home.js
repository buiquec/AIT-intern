import React, { useState } from "react";
import Product from "./elements/Product";
import { useSelector } from "react-redux";
import Detail from "../detail/Detail";

function Home({ products }) {
    const keyword = useSelector(state => state.search.keyword)
    const [clickedProductId, setClickedProductId] = useState(null)
    const handleClickProduct = (id) => {
        setClickedProductId(id)
    }
    const clearClickedId = () => {
        setClickedProductId(null)
    }
    const filteredProducts = keyword ?
        products.filter(product => product.productName.toLowerCase().includes(keyword.toLowerCase()))
        : products
    return (
        <>
            {
                clickedProductId === null ? (
                    <div className="item-list">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => {
                                return <Product
                                    key={product.productId}
                                    props={product}
                                    onClickProduct={handleClickProduct}
                                />
                            })
                        ) : (
                            <div>No results for "{keyword}"</div>
                        )
                        }
                    </div>
                ) : (
                    <Detail
                        products={products}
                        clickedId={clickedProductId}
                        clearClickedId={clearClickedId}
                    />
                )
            }
        </>
    )
}

export default Home;