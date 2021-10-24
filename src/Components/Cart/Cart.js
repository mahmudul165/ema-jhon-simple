import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  console.log(cart);
  // const total = cart.reduce((previous, product) => previous + product.price, 0);
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summary:</h3>
      <h5>Item Ordered: {totalQuantity}</h5>
      <p>Total Price: {total.toFixed(2)}</p>
      <p>Shipping: {shipping}</p>
      <small>Tax: {tax.toFixed(2)}</small>
      <h3 className="total">Grand Total: {grandTotal.toFixed(2)}</h3>
      <button className="btn-cart">
        {element}
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
