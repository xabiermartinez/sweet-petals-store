import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./screens/Products";
import Header from "./components/Header";
import Product from "./screens/Product";

function App () {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/products/:productId" element={<Product />} />
                <Route path="/" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
