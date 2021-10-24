import React, { useEffect, useState } from "react";

const UseProducts = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const url = `./products.JSON`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return [products, setproducts];
};

export default UseProducts;
