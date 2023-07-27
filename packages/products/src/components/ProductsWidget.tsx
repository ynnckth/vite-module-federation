import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/fetchProducts.ts";
import { Product } from "../types/Product.ts";
import ProductCard from "./ProductCard.tsx";

const ProductsWidget: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((products) => setProducts(products))
      .catch((e) => console.error("Error fetching products: ", e));
  }, []);

  return (
    <div
      style={{
        borderStyle: "dashed",
        borderColor: "var(--products-module-color)",
      }}
    >
      <h2>All Products [Products Remote Module]</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
export default ProductsWidget;
