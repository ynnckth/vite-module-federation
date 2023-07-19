import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home.tsx";
import Navigation from "./components/Navigation.tsx";
const ShoppingCart = React.lazy(() => import("cart/ShoppingCart"));

const App: React.FC = () => (
  <div>
    <h1>Host App Module</h1>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Loading shopping cart...</div>}>
              <ShoppingCart />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
