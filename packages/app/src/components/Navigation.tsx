import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/home");
  const navigateToShoppingCart = () => navigate("/cart");
  const navigateToProducts = () => navigate("/products");

  return (
    <div>
      <div>
        <button onClick={() => navigateToHome()}>Home</button>
        <button onClick={() => navigateToShoppingCart()}>Shopping Cart</button>
        <button onClick={() => navigateToProducts()}>Products</button>
      </div>
    </div>
  );
};

export default Navigation;
