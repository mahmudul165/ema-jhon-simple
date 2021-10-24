import React from "react";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import UseProducts from "../Hooks/UseProducts";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setproduts] = UseProducts();
  const [cart, setcart] = useCart(products);
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setcart(newCart);
    removeFromDb(key);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
