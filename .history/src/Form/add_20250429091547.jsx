
import React,(COmponent) class Add extends Component {
  constructor(props) {
    super(props);

    const list = props.products || []; // nếu products chưa có thì để [] luôn

    this.state = {
      id: list.length > 0 ? parseInt(list[list.length - 1].id) + 1 : 1,
      name: "",
      name_category: "Thời trang nam",
      code: "",
      image: "",
      price: "",
      old_price: "",
      list: list // lưu list vào state luôn
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "image" && event.target.files && event.target.files[0]) {
      val = "images/" + event.target.files[0].name;
    }
    this.setState({ [nam]: val });
    event.preventDefault();
  }

  saveProducts() {
    localStorage.setItem("products", JSON.stringify(this.state.list));
  }

  handleSubmit = () => {
    const updatedList = [...this.state.list, this.state];
    this.setState({ list: updatedList }, () => {
      this.saveProducts();
      alert("Một sản phẩm đã được thêm vào!");
      window.location.reload(true);
    });
  };

  render() {
    return (
      <div className="col-sm-4">
        <div id="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="name_category">Category</label>
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
            <label htmlFor="code">Code</label>
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
            <label htmlFor="image" id="avatar-label">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
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
            <label htmlFor="old_price">Old price</label>
            <input
              className="form-control"
              id="old_price"
              name="old_price"
              value={this.state.old_price}
              placeholder="1500"
              onChange={this.handleChange}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary mb-2"
            id="submit"
            onClick={this.handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
