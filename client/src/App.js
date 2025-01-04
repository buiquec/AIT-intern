import React, { useState, useEffect } from "react";
import './styles/index.css'
import productApi from "./service/product-api";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";

function App() {
  //states
  const [productList, setProductList] = useState([])
  const [display, setDisplay] = useState('home')
  const [clickedProductId, setClickedProductId] = useState(null)
  const [cartNumber, setCartNumber] = useState(null)
  const [searchKey, setSearchKey] = useState('')
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
    setSearchKey('')
    setDisplay('home')
  }
  //handle click cart logo
  const handleCartClick = () => {
    setDisplay('cart')
  }
  //handle search input
  const handleSearchKeyword = (keyword) => {
    setSearchKey(keyword)
  }

  // render views
  const renderView = () => {
    if (display === "home") {
      return <Home
        onClickDetail={handleClickProduct}
        products={productList}
        keyword={searchKey}
      />
    }
    if (display === "detail") {
      return <Detail
        clickedId={clickedProductId}
        products={productList}
      />
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
        onSearch={handleSearchKeyword}
      />
      {renderView()}
    </div>
  )
}

export default App;
