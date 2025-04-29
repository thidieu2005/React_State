//tạo menu đồ uống. Chọn món muốn mua, dùng checkbox để tích vào đồ cần mua
//menu có tên, giá, số lượng(tự nhập). ở dưới có ô nhập số tiền. nếu tổng tiềm chọn món lớn hơn số tiền từ ô nhập thì thông báo không đủ tiền
//nếu đủ tiền thì thông báo đã chọn món thành công và số dư còn lại
//bt2: tạo form để tạo 1 sp, có thể lưu vào local storage sau đó hiển thị ra. Và tiếp tục nâng cao lưu vào session, cloud, backend(APi, Sql,..)


import React, { useState } from "react";
import "./SimpleMenu.css"; // 🛑 Import file CSS riêng!

export default function SimpleMenu() {
  const menu = [
    { id: 1, name: "Cà phê sữa", price: 12000 },
    { id: 2, name: "Cà phê đá", price: 10000 },
    { id: 3, name: "Sting dâu", price: 8000 },
    { id: 4, name: "Trà đá", price: 2000 },
  ];

  const [selections, setSelections] = useState({});
  const [wallet, setWallet] = useState(0);
  const [message, setMessage] = useState("");

  const handleSelect = (id) => {
    const newSelections = { ...selections };
    if (newSelections[id] && newSelections[id].selected) {
      newSelections[id].selected = false;
    } else {
      newSelections[id] = { selected: true, quantity: 1 };
    }
    setSelections(newSelections);
  };

  const handleQuantityChange = (id, change) => {
    const newSelections = { ...selections };
    if (newSelections[id]) {
      let newQuantity = newSelections[id].quantity + change;
      if (newQuantity < 1) {
        newQuantity = 1;
      }
      newSelections[id].quantity = newQuantity;
      setSelections(newSelections);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    menu.forEach((item) => {
      const selectedItem = selections[item.id];
      if (selectedItem && selectedItem.selected) {
        total += item.price * selectedItem.quantity;
      }
    });
    return total;
  };

  const handleBuy = () => {
    const total = calculateTotal();
    if (total === 0) {
      setMessage("Chưa chọn món nào!");
    } else if (total > wallet) {
      setMessage("Không đủ tiền!");
    } else {
      const remaining = wallet - total;
      setMessage(`Mua thành công! Số dư còn lại: ${remaining}đ`);
    }
  };

  return (
      <div className="menu-container">
      
              <h2 className="menu-title">Menu</h2>
       <div> 
      {menu.map((item) => (
        <div key={item.id} className="menu-item">
          <input
            type="checkbox"
            checked={selections[item.id]?.selected || false}
            onChange={() => handleSelect(item.id)}
          />
          {item.name} ({item.price}đ)

          {selections[item.id]?.selected && (
            <span className="quantity-control">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span className="quantity">{selections[item.id].quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </span>
              )}
              
          </div>
          </div>  
      ))}

      <div className="wallet-input">
        <label>Số tiền trong ví: </label>
        <input
          type="number"
          value={wallet}
          onChange={(e) => setWallet(Number(e.target.value))}
        />
      </div>

      <div className="buy-button">
        <button onClick={handleBuy}>Mua</button>
      </div>

      <div className="message">{message}</div>
    </div>
  );
}
