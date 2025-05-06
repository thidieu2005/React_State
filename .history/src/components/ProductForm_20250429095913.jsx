import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [form, setForm] = useState({
    name: "",
    category: "Nam",
    code: "",
    image: "",
    price: "",
    oldPrice: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(form);
    setForm({
      name: "",
      category: "Nam",
      code: "",
      image: "",
      price: "",
      oldPrice: ""
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Thêm sản phẩm</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
      </select>
      <input name="code" placeholder="Code" value={form.code} onChange={handleChange} required />
      <input type="file" name="image" accept="image/*" onChange={handleChange} />
      <input name="price" placeholder="Price" type="number" value={form.price} onChange={handleChange} required />
      <input name="oldPrice" placeholder="Old price" type="number" value={form.oldPrice} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default ProductForm;
