//tạo menu đồ uống. Chọn món muốn mua, dùng checkbox để tích vào đồ cần mua
//menu có tên, giá, số lượng(tự nhập). ở dưới có ô nhập số tiền. nếu tổng tiềm chọn món lớn hơn số tiền từ ô nhập thì thông báo không đủ tiền
//nếu đủ tiền thì thông báo đã chọn món thành công và số dư còn lại
//bt2: tạo form để tạo 1 sp, có thể lưu vào local storage sau đó hiển thị ra. Và tiếp tục nâng cao lưu vào session, cloud, backend(APi, Sql,..)


import React, { useState } from "react";

export default function SimpleMenu() {
  const menu = [
    { id: 1, name: "Cà phê sữa..........................", price: 15000 },
    { id: 2, name: "Cà phê đá...........................", price: 20000 },
    { id: 3, name: "Sting dâu...............................", price: 10000 },
    { id: 4, name: "Trà đá.................................", price: 5000 },
  ];

  const [selections, setSelections] = useState({});
  const [wallet, setWallet] = useState(0);
  const [message, setMessage] = useState("");

  const handleSelect = (id) => {
    setSelections((prev) => ({
      ...prev,
      [id]: prev[id] ? { ...prev[id], selected: !prev[id].selected } : { selected: true, quantity: 1 },
    }));
  };

  const handleQuantity = (id, change) => {
    setSelections((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity: Math.max(1, (prev[id]?.quantity || 1) + change),
      },
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    for (let item of menu) {
      if (selections[item.id]?.selected) {
        total += item.price * (selections[item.id].quantity || 1);
      }
    }
    return total;
  };

  const handleBuy = () => {
    const total = calculateTotal();
    if (total > wallet) {
      setMessage("Không đủ tiền!");
    } else {
      setMessage(`Mua thành công! Số dư còn lại: ${wallet - total}đ`);
    }
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif', alginItems: 'center' }}>
      <h1 style={{ textAlign: 'center',padding:'20px', }}>MIRA COFFEE</h1>
      {menu.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px', padding:'20px', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={selections[item.id]?.selected || false}
            onChange={() => handleSelect(item.id)}
          />
          {item.name} ({item.price}đ)
          {selections[item.id]?.selected && (
            <span style={{ marginLeft: '10px' }}>
              <button onClick={() => handleQuantity(item.id, -1)}>-</button>
              <span style={{ margin: '0 5px' }}>{selections[item.id].quantity}</span>
              <button onClick={() => handleQuantity(item.id, 1)}>+</button>
            </span>
          )}
        </div>
      ))}

      <div style={{ marginTop: '30px' }}>
        <label>Số tiền trong ví: </label>
        <input
          type="number"
          value={wallet}
          onChange={(e) => setWallet(Number(e.target.value))}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleBuy}>Mua</button>
      </div>

      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        {message}
      </div>
    </div>
  );
}
