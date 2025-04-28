// import React,{Component} from 'react';

// export class CGetdtAPI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       error: null,
//       isLoaded: false,
//     };
//   }

//   componentDidMount() {
//     fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             data: result,
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }

//   render() {
//     const { error, isLoaded, data } = this.state;

//     if (error) {
//       return <div>Lỗi: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Đang tải dữ liệu...</div>;
//     } else {
//       return (
//         <div>
//           <h2>Danh sách sản phẩm (Class Component)</h2>
//           <ul>
//             {data.map((item) => (
//               <li key={item.id}>
//                 <img
//                   src={item.avatar || 'https://via.placeholder.com/100'}
//                   alt={item.name}
//                   style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
//                 />
//                 <p><strong>{item.name}</strong></p>
//                 <p>Mô tả: {item.description || 'Không có'}</p>
//                 <p>Giá: {item.price || '0'} đ</p>
//                 <p>Số lượng: {item.quantity || '0'}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
//     }
//   }
// }
// export default CGetdtAPI;


//============Sử dụng filter và chỉnh sửa: import React, { Component } from 'react';

export class CGetdtAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isLoaded: false,
      filterPrice: 'All', // Thêm filter giá
      editingProduct: null, // Để chỉnh sửa sản phẩm
      editName: '',
      editPrice: '',
    };
  }

  componentDidMount() {
    fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleFilterChange = (e) => {
    this.setState({ filterPrice: e.target.value });
  };

  getFilteredProducts = () => {
    const { data, filterPrice } = this.state;
    return data.filter((item) => {
      if (filterPrice === 'All') return true;
      if (filterPrice === '<10000') return Number(item.price) < 10000;
      if (filterPrice === '>=10000') return Number(item.price) >= 10000;
      return true;
    });
  };

  handleEdit = (product) => {
    this.setState({
      editingProduct: product,
      editName: product.name,
      editPrice: product.price,
    });
  };

  handleSave = () => {
    const { editingProduct, editName, editPrice, data } = this.state;

    const updatedData = data.map((item) => {
      if (item.id === editingProduct.id) {
        return { ...item, name: editName, price: editPrice };
      }
      return item;
    });

    this.setState({ data: updatedData, editingProduct: null });
  };

  handleCancel = () => {
    this.setState({ editingProduct: null });
  };

  handleChangeEdit = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { error, isLoaded, editingProduct, editName, editPrice } = this.state;
    const filteredProducts = this.getFilteredProducts();

    if (error) {
      return <div>Lỗi: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Đang tải dữ liệu...</div>;
    } else {
      return (
        <div>
          <h2>Danh sách sản phẩm (Class Component)</h2>

          {/* Bộ lọc giá */}
          <div style={{ marginBottom: '20px' }}>
            <select onChange={this.handleFilterChange}>
              <option value="All">Tất cả giá</option>
              <option value="<10000">Giá dưới 10.000 đ</option>
              <option value=">=10000">Giá từ 10.000 đ trở lên</option>
            </select>
          </div>

          {/* Nếu đang chỉnh sửa */}
          {editingProduct && (
            <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid gray' }}>
              <h3>Chỉnh sửa sản phẩm</h3>
              <input
                type="text"
                name="editName"
                value={editName}
                onChange={this.handleChangeEdit}
                placeholder="Tên sản phẩm"
              />
              <input
                type="number"
                name="editPrice"
                value={editPrice}
                onChange={this.handleChangeEdit}
                placeholder="Giá sản phẩm"
                style={{ marginLeft: '10px' }}
              />
              <div style={{ marginTop: '10px' }}>
                <button onClick={this.handleSave}>Lưu</button>
                <button onClick={this.handleCancel} style={{ marginLeft: '10px' }}>
                  Hủy
                </button>
              </div>
            </div>
          )}

          {/* Danh sách sản phẩm */}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filteredProducts.map((item) => (
              <li key={item.id} style={{ marginBottom: '20px' }}>
                <img
                  src={item.avatar || 'https://via.placeholder.com/100'}
                  alt={item.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <p><strong>{item.name}</strong></p>
                <p>Mô tả: {item.description || 'Không có'}</p>
                <p>Giá: {item.price || '0'} đ</p>
                <p>Số lượng: {item.quantity || '0'}</p>
                <button onClick={() => this.handleEdit(item)}>Chỉnh sửa</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default CGetdtAPI;

