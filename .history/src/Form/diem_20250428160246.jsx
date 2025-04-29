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


  useEffect(() => {
    const tb = (diemToan + diemLy) / 2;
    setDiemTB(tb);
  }, [diemToan, diemLy]);
 
    const xepLoai = () => {
      if
    if (diemTB >= 8) return "Giỏi";
    if (diemTB >= 6.5) return "Khá";
    if (diemTB >= 5) return "Trung Bình";
    return "Yếu";
  };

  return (
    <div>
      <form>
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
        <label htmlFor="diemTB">Điểm Trung Bình:</label>
        <input
          type="number"
          id="diemTB"
          value={diemTB}
          disabled // không cho người dùng nhập tay
        />
      </form>
      <h1>Xếp loại: {xepLoai()}</h1>
    </div>
  );
}
