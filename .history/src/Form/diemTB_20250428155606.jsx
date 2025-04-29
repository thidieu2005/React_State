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
}