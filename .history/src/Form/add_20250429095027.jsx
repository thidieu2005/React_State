import React, { Component } from "react";

class Add extends Component {
  constructor(props) {
    super(props);

    const list = props.products || [];

    this.state = {
      list,
      name: "",
      name_category: "Thời trang nam",
      code: "",
      image: "",
      price: "",
      old_price: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleChange(event) {
  const { name, value, files } = event.target;
  if (name === "image" && files.length > 0) {
    const file = files[0];
    const imageUrl = URL.createObjectURL(file);
    this.setState({ image: imageUrl });
  } else {
    this.setState({ [name]: value });
  }
}


//   saveProducts(products) {
//   const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
// existingProducts.push(newProduct);
// localStorage.setItem("products", JSON.stringify(existingProducts));

//   }

  handleSubmit(event) {
    event.preventDefault();

    const { list, name, name_category, code, image, price, old_price } = this.state;
    const newId = list.length > 0 ? parseInt(list[list.length - 1].id) + 1 : 1;

    const newProduct = {
      id: newId,
      name,
      name_category,
      code,
      image,
      price,
      old_price,
    };

    const updatedList = [...list, newProduct];

    this.saveProducts(updatedList);

    alert("Một sản phẩm đã được thêm vào!");

    this.setState({
      list: updatedList,
      name: "",
      name_category: "Thời trang nam",
      code: "",
      image: "",
      price: "",
      old_price: "",
    });
      this.props.navigate("/home");

  }

  render() {
    return (
      <div className="container mt-4">
        <h2>Thêm Sản Phẩm Mới</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Tên sản phẩm</label>
            <input
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              placeholder="Dép"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name_category">Loại</label>
            <select
              className="form-control"
              id="name_category"
              name="name_category"
              value={this.state.name_category}
              onChange={this.handleChange}
            >
              <option value="Thời trang nam">Nam</option>
              <option value="Thời trang nữ">Nữ</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="code">Mã sản phẩm</label>
            <input
              className="form-control"
              id="code"
              name="code"
              value={this.state.code}
              placeholder="XXXXXXX"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Ảnh</label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Giá</label>
            <input
              className="form-control"
              id="price"
              name="price"
              value={this.state.price}
              placeholder="10000"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="old_price">Giá cũ</label>
            <input
              className="form-control"
              id="old_price"
              name="old_price"
              value={this.state.old_price}
              placeholder="15000"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Lưu
          </button>
        </form>
      </div>
    );
  }
}

export default Add;
