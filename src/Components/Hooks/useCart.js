import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredCart();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setcart(storedCart);
    }
  }, [products]);
  return [cart, setcart];
};
export default useCart;
