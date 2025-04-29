import React, { useState, useEffect } from 'react';
export function DiemTB() {
    const [diemToan, setDiemToan] = useState(0);
    const [diemLy, setDiemLy] = useState(0);
    const [diemTB, setDiemTB] = useState(0);
    const handleDiemToan = (event) => {
    setDiemToan(event.target.value);
  };
const handleDiemLy = (event) => {
    setDiemLy(event.target.value);
    };
    const handleSubmit = (event) => {
    setDiemTB(event.target.value);
    };  
    render() {
        return (
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
                    onChange={handleSubmit}
                />
               
            </form>
        <h1> Xếp loại: htmlFor="x"</h1>);
    }
}