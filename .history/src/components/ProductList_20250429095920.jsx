import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((p, idx) => (
        <div key={idx} className="product-card">
          <h4>{p.name}</h4>
          <p>{p.code}</p>
          <p className="price">
            {p.price} ₫
            {p.oldPrice && <span className="old-price">{p.oldPrice} ₫</span>}
          </p>
          {p.image && <img src={p.image} alt={p.name} />}
          <button>Đặt mua</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
