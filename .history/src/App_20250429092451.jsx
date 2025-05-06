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
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "/Home";
import Add from "./Add";

function App() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark p-2">
        <Link to="/" className="btn btn-light mx-2">
          Home
        </Link>
        <Link to="/add" className="btn btn-light mx-2">
          Add
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;
