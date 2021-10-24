import "./Product.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const Product = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />;
  const { img, name, seller, price, stock, star } = props?.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p>
          by:<span> {seller}</span>
        </p>
        <h4>$ {price}</h4>
        <p>
          <small> only {stock} left in stock - order soon</small>
        </p>
        <Rating
          initialRating={star}
          readonly
          emptySymbol="far fa-star  icon-color"
          fullSymbol="fas  fa-star   icon-color"
        />
        <br />
        <br />
        <button
          onClick={() => {
            props.handleAddToCard(props.product);
          }}
          className="btn-cart"
        >
          {element}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
