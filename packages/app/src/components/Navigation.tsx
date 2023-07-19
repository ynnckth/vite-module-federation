import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate("/home");
  const navigateToShoppingCart = () => navigate("/cart");
  const navigateToProducts = () => navigate("/products");

  return (
    <div>
      <nav>
        <div>
          <button onClick={() => navigateToHome()}>Home</button>
        </div>
        <div>
          <div>
            <button onClick={() => navigateToShoppingCart()}>
              Shopping Cart
            </button>
          </div>
        </div>
        <div>
          <div>
            <button onClick={() => navigateToProducts()}>Products</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
