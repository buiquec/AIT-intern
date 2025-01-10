import { useSelector } from "react-redux"
import CartProduct from "./elements/CartProduct"

export default function Cart({ products }) {
  const productCart = useSelector(state => state.cart)
  return (
    <>
      {productCart.length > 0 ? (
        <div className="cart-list">
          {productCart.map((item) => {
            const cartProduct = products.find(product => product.productId === item.productId)
            return <CartProduct
              key={item.productId}
              cartProduct={cartProduct}
              item={item}
            />
          })}
        </div>
      ) : (
        <div>No product added to Cart</div>
      )}
    </>
  )
}
