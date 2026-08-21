import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-thumb">
        <img src={product.image} alt={product.name} />
      </div>
      <h4 className="product-name">{product.name}</h4>
      <div className="product-rating">
        {"★".repeat(Math.round(product.rating))}
        {"☆".repeat(5 - Math.round(product.rating))} {product.rating}/5
      </div>
      <div className="product-price">
        <span className="price">${product.price}</span>
        {product.oldPrice && (
          <span className="old-price">${product.oldPrice}</span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;