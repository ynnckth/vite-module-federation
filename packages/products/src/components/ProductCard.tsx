import React from "react";
import { Product } from "../types/Product.ts";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div
      style={{
        maxWidth: "250px",
        padding: "20px",
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
      }}
    >
      <div>
        <strong>{product.name}</strong>
      </div>
      <p>{product.description}</p>
      <p>{`Unit price: $${product.unitPrice}`}</p>
    </div>
  );
};
export default ProductCard;
