import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setdisplayProducts] = useState([]);
  useEffect(() => {
    const url = `./products.JSON`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  useEffect(() => {
    if (products.length) {
      const saveFromLocalStorage = getStoredCart();
      const storeCart = [];
      for (const key in saveFromLocalStorage) {
        const addProduct = products.find((product) => product.key === key);
        if (addProduct) {
          const quantity = saveFromLocalStorage[key];
          addProduct.quantity = quantity;
          storeCart.push(addProduct);
        }
        setCart(storeCart);
      }
    }
  }, [products]);
  const handleAddToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  const searchEvent = (e) => {
    const searchText = e.target.value;
    const matchProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setdisplayProducts(matchProduct);
  };

  return (
    <>
      <div className="search-container">
        <input
          onChange={searchEvent}
          type="text"
          placeholder="Search Product"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              handleAddToCard={handleAddToCard}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Shop;
