import React from "react";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
// import './app.css'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 NOT FOUND</Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
