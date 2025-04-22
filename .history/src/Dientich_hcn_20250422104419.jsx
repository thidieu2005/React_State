
import React, { useState } from 'react';

export function Dientich_hcn() {
    const [lenght, setLenght] = useState(0);
    const [width, setWidth] = useState(0);          
    const [area, setArea] = useState(0);
    const calculateArea = () => {
        setArea(lenght * width);
    };
    return (
        <div style={{ padding: '20px' }}>
            <h2>Tính diện tích ình chữ nhật</h2>
            <div>
                <label>Nhập chiều dài:</label>
                <input type="number"
                    value={lenght}
                    onChange={(e) => setLenght(Number(e.target.value))} />
            </div>
            <div>
                <label>Nhập chiều rộng:</label>
                <input type="number"
                    value={width}
                    onChange={(e) => setWidth(Numbere.target.value)} />
            </div>
            <div>
                <button onClick={calculateArea}>Tính diện tích</button>
                <p>Diện tích: {area}</p>
            </div>
        </div>
    )
}