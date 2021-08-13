import React from "react";

export default function Product({ product }) {
  // const {addItem, removeItem, findInCart} = useCart();
  return (
    <div className="product">
      {/* image */}
      <img src={product.image_url} alt={product.name} />

      {/* product name */}
      <h3>{product.name}</h3>

      {/* buttons */}
      <div className="product-buttons">
        {/* remove */}
        <button className="remove">Remove</button>

        {/* add */}
        <button className="add">Add to Cart (0)</button>
      </div>
    </div>
  );
}
