import React from "react";
import Header from "./components/Header";
import products from "./products";
import Product from "./components/Product";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      <main>
        <div className="products-list">
          {/* show products here */}
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
