// import React, { Component } from "react";
// import { Product } from './product';

// class Add extends Component {
//   list = this.props.products;
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: parseInt(this.list[this.list.length - 1].id) + 1,
//       name: "",
//       name_category: "Thời trang nam",
//       code: "",
//       image: "",
//       price: "",
//       old_price: "",
//     };
//     // this.list = this.getPeople();
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     if (event.target.name === "image") {
//       val = "images/" + document.getElementById("image").files.item(0).name;
//     }
//     this.setState({ [nam]: val });
//     event.preventDefault();
//   };

//   saveProducts() {
//     localStorage.setItem("products", JSON.stringify(this.list));
//   }

//   handleSubmit = () => {
//     this.list.push(this.state);
//     alert("Một sản phẩm đã được thêm vào!");
//     this.saveProducts();
//     window.location.reload(true);
//   };

//   render() {
//     return (
//       <div className="col-sm-4">
//         <div id="form">
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               className="form-control"
//               id="name"
//               name="name"
//               placeholder="Dép"
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="name_category">Category</label>
//             <select
//               className="form-control"
//               id="name_category"
//               name="name_category"
//               onChange={this.handleChange}
//               defaultValue={this.props.products.name_category}
//             >
//               <option value="Thời trang nam">Nam</option>
//               <option value="Thời trang nữ">Nữ</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="code">Code</label>
//             <input
//               className="form-control"
//               id="code"
//               name="code"
//               placeholder="XXXXXXX"
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="image" id="avatar-label">
//               Image
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               className="form-control"
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <input
//               className="form-control"
//               id="price"
//               name="price"
//               placeholder="10000"
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="old_price">Old price</label>
//             <input
//               className="form-control"
//               id="old_price"
//               name="old_price"
//               placeholder="1500"
//               onChange={this.handleChange}
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary mb-2"
//             id="submit"
//             onClick={this.handleSubmit}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Add;
// Add.jsx
import React, { useState, useEffect } from "react";
import { Product } from "./Product"; // nhớ đúng đường dẫn nha

export default function Add() {
  const [form, setForm] = useState({
    name: '',
    name_category: '',
    code: '',
    image: '',
    price: '',
    old_price: '',
  });

  useEffect(() => {
    // Lấy danh sách sản phẩm
    const products = Product("products");

    // Giả sử lấy sản phẩm đầu tiên (hoặc random gì đó)
    const product = products[0];

    // Set dữ liệu vào form
    if (product) {
      setForm({
        name: product.name,
        name_category: product.name_category,
        code: product.id.toString(), // ví dụ code lấy theo id
        image: product.image,
        price: product.price,
        old_price: product.old_price,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <select name="name_category" value={form.name_category} onChange={handleChange}>
          <option value="nam">Nam</option>
          <option value="nữ">Nữ</option>
        </select>
        <input type="text" name="code" value={form.code} onChange={handleChange} />
        <input type="text" name="image" value={form.image} onChange={handleChange} />
        <input type="number" name="price" value={form.price} onChange={handleChange} />
        <input type="number" name="old_price" value={form.old_price} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
