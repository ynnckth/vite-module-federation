import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home.tsx";
import Navigation from "./components/Navigation.tsx";
import PageContainer from "./components/PageContainer.tsx";

const App: React.FC = () => {
  return (
    <div style={{ minHeight: "100%", padding: "35px" }}>
      <h1>Dashboard - Host App Module</h1>
      <BrowserRouter>
        <Navigation />
        <PageContainer>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </PageContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;
