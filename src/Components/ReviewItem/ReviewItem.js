import React from "react";

const ReviewItem = (props) => {
  const { img, name, seller, price, quantity, key } = props?.product;
  return (
    <div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <h5>Quantity: {quantity}</h5>
        <p>Price: {price}</p>
        <br />
        <button onClick={() => props.handleRemove(key)} className="btn-cart">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
