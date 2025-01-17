import { useDispatch, useSelector } from "react-redux"
import CartProduct from "./elements/CartProduct"
import { useMemo, useState } from "react"
import { clearCart } from "../../features/cart/cartSlice"

export default function Cart({ products }) {
  const productCart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [checkedItems, setCheckedItems] = useState(new Set())

  //handle when toggling checking item
  const handleCheck = (id) => {
    setCheckedItems((prevCheckedItems) => { // takes the prev set
      const newCheckedItems = new Set(prevCheckedItems) // clone a new Set to have prev values
      if (newCheckedItems.has(id)) {
        newCheckedItems.delete(id)
      } else {
        newCheckedItems.add(id)
      }
      return newCheckedItems // return that new Set
    })
  }
  //handle remove all
  const removeAllProductFromCart = () => {
    dispatch(clearCart())
  }
  //calculate
  const calculateTotalPrice = useMemo(() => {
    console.log("Calculating")
    return productCart.reduce((totalPrice, product) => {
      if (checkedItems.has(product.productId)) {
        return totalPrice += product.price * product.quantity
      }
      return totalPrice
    }, 0)
  }, [checkedItems, productCart])
  
  return (
    <>
      {productCart.length > 0 ? (
        <>
          <div className="cart-list">
            {productCart.map((item) => {
              const cartProduct = products.find(product => product.productId === item.productId)
              return <CartProduct
                key={item.productId}
                handleClickCheckbox={handleCheck}
                selectedProduct={checkedItems}
                cartProduct={cartProduct}
                item={item}
              />
            })}
          </div>
          <button onClick={removeAllProductFromCart}>Remove all items</button>
        </>
      ) : (
        <div>No product added to Cart</div>
      )}
      <div>The total price is: ${calculateTotalPrice}</div>
    </>
  )
}
