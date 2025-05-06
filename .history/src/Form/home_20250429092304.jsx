import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    const list = JSON.parse(localStorage.getItem("products")) || [];

    this.state = {
      list,
    };
  }

  renderCategory(categoryName) {
    const filtered = this.state.list.filter(
      (item) => item.name_category === categoryName
    );

    if (filtered.length === 0) return null;

    return (
      <div className="mb-5">
        <h3>{categoryName}</h3>
        <div className="row">
          {filtered.map((item) => (
            <div className="col-sm-4" key={item.id}>
              <div className="card mb-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p>Mã SP: {item.code}</p>
                  <p>
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      {item.price} đ
                    </span>{" "}
                    &nbsp;
                    <del>{item.old_price} đ</del>
                  </p>
                  <button className="btn btn-warning">Đặt mua</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container mt-4">
        {this.renderCategory("Thời trang nam")}
        <hr />
        {this.renderCategory("Thời trang nữ")}
      </div>
    );
  }
}

export default Home;
