//tạo menu đồ uống. Chọn món muốn mua, dùng checkbox để tích vào đồ cần mua
//menu có tên, giá, số lượng(tự nhập). ở dưới có ô nhập số tiền. nếu tổng tiềm chọn món lớn hơn số tiền từ ô nhập thì thông báo không đủ tiền
//nếu đủ tiền thì thông báo đã chọn món thành công và số dư còn lại
//bt2: tạo form để tạo 1 sp, có thể lưu vào local storage sau đó hiển thị ra. Và tiếp tục nâng cao lưu vào session, cloud, backend(APi, Sql,..)


import React, { useState } from "react";

export default function SimpleMenu() {
  // Danh sách món ăn
  const menu = [
    { id: 1, name: "Cà phê sữa", price: 12000 },
    { id: 2, name: "Cà phê đá", price: 10000 },
    { id: 3, name: "Sting dâu", price: 8000 },
    { id: 4, name: "Trà đá", price: 2000 },
  ];

  // Trạng thái lưu lựa chọn món
  const [selections, setSelections] = useState({});
  // Trạng thái lưu số tiền trong ví
  const [wallet, setWallet] = useState(0);
  // Trạng thái lưu thông báo kết quả mua hàng
  const [message, setMessage] = useState("");

  // Xử lý khi tick/untick checkbox
  const handleSelect = (id) => {
    // Tạo một bản sao selections hiện tại
    const newSelections = { ...selections };

    // Nếu đã chọn => bỏ chọn
    if (newSelections[id] && newSelections[id].selected) {
      newSelections[id].selected = false;
    } else {
      // Nếu chưa chọn => chọn và đặt quantity = 1
      newSelections[id] = { selected: true, quantity: 1 };
    }

    // Cập nhật state
    setSelections(newSelections);
  };

  // Xử lý tăng/giảm số lượng
  const handleQuantityChange = (id, change) => {
    const newSelections = { ...selections };

    if (newSelections[id]) {
      // Tính số lượng mới
      let newQuantity = newSelections[id].quantity + change;

      // Không cho nhỏ hơn 1
      if (newQuantity < 1) {
        newQuantity = 1;
      }

      newSelections[id].quantity = newQuantity;

      // Cập nhật state
      setSelections(newSelections);
    }
  };

  // Tính tổng tiền các món đã chọn
  const calculateTotal = () => {
    let total = 0;

    // Lặp qua danh sách món
    menu.forEach((item) => {
      const selectedItem = selections[item.id];

      // Nếu món đã chọn thì cộng vào tổng tiền
      if (selectedItem && selectedItem.selected) {
        total += item.price * selectedItem.quantity;
      }
    });

    return total;
  };

  // Xử lý khi nhấn "Mua"
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
    <div>
      <h2>Menu</h2>
      {menu.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <input
            type="checkbox"
            checked={selections[item.id]?.selected || false}
            onChange={() => handleSelect(item.id)}
          />
          {item.name} ({item.price}đ)

          {/* Hiển thị nút tăng/giảm nếu món đã chọn */}
          {selections[item.id]?.selected && (
            <span style={{ marginLeft: "10px" }}>
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span style={{ margin: "0 5px" }}>
                {selections[item.id].quantity}
              </span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </span>
          )}
        </div>
      ))}

      {/* Nhập số tiền trong ví */}
      <div style={{ marginTop: "20px" }}>
        <label>Số tiền trong ví: </label>
        <input
          type="number"
          value={wallet}
          onChange={(e) => setWallet(Number(e.target.value))}
        />
      </div>

      {/* Nút mua */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleBuy}>Mua</button>
      </div>

      {/* Hiển thị thông báo */}
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</div>
    </div>
  );
}
