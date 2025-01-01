import React, { useState, useEffect } from "react";
import './styles/index.css'
import productApi from "./service/product-api";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";

function App() {
  //states
  const [display, setDisplay] = useState('home')
  const [clickedProductId, setClickedProductId] = useState(null)
  const [cartNumber, setCartNumber] = useState(null)
  const [productList, setProductList] = useState([])
  // fetch api
  useEffect(() => {
    async function fetchProducts() {
      const products = await productApi.getAll()
      setProductList(products)
    }
    fetchProducts()
    function fetchCartNumber() {
      const number = 0
      setCartNumber(number)
    }
    fetchCartNumber()
  }, [])
  // handle click a product
  const handleClickProduct = (id) => {
    setClickedProductId(id)
    setDisplay('detail')
  }
  // handle click logo
  const handleClickLogo = () => {
    setDisplay('home')
  }
  const handleCartClick = () => {
    setDisplay('cart')
  }

  // render views
  const renderView = () => {
    if (display === "home") {
      return <Home onClickDetail={handleClickProduct} products={productList} />
    }
    if (display === "detail") {
      return <Detail clickedId={clickedProductId} products={productList} />
    }
    if (display === "cart") {
      return <Cart />
    }
  }
  // 
  return (
    <div className="container">
      <Header
        onLogoClick={handleClickLogo}
        onCartClick={handleCartClick}
        onCartNumberChange={cartNumber}
      />
      {renderView()}
    </div>
  )
}

export default App;
