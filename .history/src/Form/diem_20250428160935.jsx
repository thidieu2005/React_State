import React, { useState, useEffect } from 'react';

export function DiemTB() {
  const [diemToan, setDiemToan] = useState(0);
  const [diemLy, setDiemLy] = useState(0);
  const [diemTB, setDiemTB] = useState(0);

  const handleDiemToan = (event) => {
    setDiemToan(Number(event.target.value));
  };

  const handleDiemLy = (event) => {
    setDiemLy(Number(event.target.value));
  };


 const handleSubmit = (event) => {
    event.preventDefault(); // chặn reload trang
    const tb = (diemToan + diemLy) / 2;
    setDiemTB(tb);
  };
 
    const xepLoai = () => {
        if (diemTB >= 9) return "Xuất sắc";
        if (diemTB >= 8) return "Giỏi";
        if (diemTB >= 7) return "Khá";
        if (diemTB >= 5) return "Trung Bình";
        return "Yếu";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Điểm trung bình</h1>
        <label htmlFor="diemToan">Điểm Toán:</label>
        <input
          type="number"
          id="diemToan"
          value={diemToan}
          onChange={handleDiemToan}
        />
        <br />
        <label htmlFor="diemLy">Điểm Lý:</label>
        <input
          type="number"
          id="diemLy"
          value={diemLy}
          onChange={handleDiemLy}
        />
        <br />
      <button type="submit">Tính điểm TB</button>
      </form>
      <h1>Xếp loại: {xepLoai()}</h1>
    </div>
  );
}
