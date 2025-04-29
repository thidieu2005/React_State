import React, { useState, useEffect } from 'react';
export function DiemTB() {
    const [diemToan, setDiemToan] = useState(0);
    const [diemLy, setDiemLy] = useState(0);
    const [diemTB, setDiemTB] = useState(0);
    const handleChange = (event) => {
    setDiemToan(event.target.value);
  };
const handleChange = (event) => {
    setDiemLy(event.target.value);
    };
    const handleChange = (event) => {
    setDiemTB(event.target.value);
    };  
    render() {
        return (
            <div>
                <h1>Điểm trung bình</h1>
                <label htmlFor="diemToan">Điểm Toán:</label>
                <input
                    type="number"
                    id="diemToan"
                    value={diemToan}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="diemLy">Điểm Lý:</label>
                <input
                    type="number"
                    id="diemLy"
                    value={diemLy}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="diemTB">Điểm Trung Bình:</label>
                <input
                    type="number"
                    id="diemTB"
                    value={diemTB}
                    onChange={handleChange}
                />
            </div>
        );
    }
}