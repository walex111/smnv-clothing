import React from "react";

import "./checkout-items.styles.scss";

const CheckoutItems = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-items">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItems;
