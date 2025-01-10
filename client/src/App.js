import React, { useState, useEffect } from "react";
import './styles/index.css'
import productApi from "./service/product-api";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";

import { useSelector } from "react-redux";

function App() {
  //dispatch
  // const dispatch = useDispatch()
  //states
  const display = useSelector(state => state.render.display)
  const [productList, setProductList] = useState([])
  // fetch api
  useEffect(() => {
    async function fetchProducts() {
      const products = await productApi.getAll()
      setProductList(products)
    }
    fetchProducts()
  }, [])
  // render views
  const renderView = () => {
    if (display === "home") {
      return <Home
        products={productList}
      />
    }
    if (display === "cart") {
      return <Cart
        products={productList}
      />
    }
  }
  return (
    <div className="container">
      <Header/>
      {renderView()}
    </div>
  )
}

export default App;
