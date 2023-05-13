import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import PaymentSuccess from "./PaymentSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
