import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Detail from "./pages/Detail.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import NewArrival from "./pages/NewArrival.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/new-arrival" element={<NewArrival />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
