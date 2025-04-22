import React, { Component } from 'react';
export function Dientich_hcn() {
    conts [lenght, setLenght] = useState(0);
    const [width, setWidth] = useState(0);          
    const [area, setArea] = useState(0);
    const calculateArea = () => {
        setArea(lenght * width);
    };
    return (
        <div style={{ pading: '20px' }}>
            <h2>Tính diện tích ình chữ nhật</h2>
            <div>
                <label>Nhập chiều dài:</label>
                <input type="number"
                    value={lenght}
                    onChange={(e) => setLenght(e.target.value)} />
            </div>
            <div>
                <label>Nhập chiều rộng:</label>
                <input type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)} />
        </div>
    )
}