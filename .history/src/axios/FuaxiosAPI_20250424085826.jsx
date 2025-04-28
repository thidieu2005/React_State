import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FuaxiosAPI() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gọi API bằng axios
    axios
      .get('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []); // Chạy 1 lần khi component load

  if (isLoading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Lỗi: {error.message}</div>;
  }

  return (
    <div>
      <h2>Danh sách sản phẩm (Function Component)</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: '20px' }}>
            <img
              src={item.avatar || 'https://via.placeholder.com/100'}
              alt={item.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px',boder: }}
            />
            <p><strong>{item.name}</strong></p>
            <p>Mô tả: {item.description || 'Không có'}</p>
            <p>Giá: {item.price || '0'} đ</p>
            <p>Số lượng: {item.quantity || '0'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FuaxiosAPI;
