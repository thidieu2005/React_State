import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Lỗi khi gọi API:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Danh sách sản phẩm</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '10px',
            width: '250px'
          }}>
            <img
              src={product.avatar || 'https://via.placeholder.com/150'}
              alt={product.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3>{product.name || 'Chưa có tên'}</h3>
            <p><strong>Mô tả:</strong> {product.description || 'Không có mô tả'}</p>
            <p><strong>Giá:</strong> {product.price || '0'} đ</p>
            <p><strong>Số lượng:</strong> {product.quantity || '0'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
