// import React from 'react'
// import { Dientich_hcn } from './Dientich_hcn'
// class App extends React.Component {
//     render() {
//         return (
//             <div style={{ padding: '20px' }}>
//                 <h1>Ứng dụng tính diện tích hình chữ nhật</h1>
//                 <Dientich_hcn />
//             </div>
//         )
//     // }
// }
// export default App

// App.jsx

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Form/home";
import Add from "./Form/add";


import React, { useState } from "react";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const maleProducts = products.filter((p) => p.category === "Nam");
  const femaleProducts = products.filter((p) => p.category === "Nữ");

  return (
    <div className="app">
      <div className="form-container">
        <ProductForm onAddProduct={handleAddProduct} />
      </div>
      <div className="product-section">
        <h2>THỜI TRANG NAM</h2>
        <ProductList products={maleProducts} />
        <h2>THỜI TRANG NỮ</h2>
        <ProductList products={femaleProducts} />
      </div>
    </div>
  );
}

export default App;

