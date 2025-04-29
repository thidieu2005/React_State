//tạo menu đồ uống. Chọn món muốn mua, dùng checkbox để tích vào đồ cần mua
//menu có tên, giá, số lượng(tự nhập). ở dưới có ô nhập số tiền. nếu tổng tiềm chọn món lớn hơn số tiền từ ô nhập thì thông báo không đủ tiền
//nếu đủ tiền thì thông báo đã chọn món thành công và số dư còn lại
//bt2: tạo form để tạo 1 sp, có thể lưu vào local storage sau đó hiển thị ra. Và tiếp tục nâng cao lưu vào session, cloud, backend(APi, Sql,..)


import React, { useState } from 'react';
function Checkbox({ label, value, onChange }) {
    return (
        <form
        <label>
            <input type="checkbox" value={value} onChange={onChange} />
            {label}
        </label>
        <from></from>
    );
}