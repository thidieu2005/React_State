import React,{COmponent} from 'react';

export class CGetdtAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isLoaded: false,
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

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Lỗi: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Đang tải dữ liệu...</div>;
    } else {
      return (
        <div>
          <h2>Danh sách sản phẩm (Class Component)</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <img
                  src={item.avatar || 'https://via.placeholder.com/100'}
                  alt={item.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <p><strong>{item.name}</strong></p>
                <p>Mô tả: {item.description || 'Không có'}</p>
                <p>Giá: {item.price || '0'} đ</p>
                <p>Số lượng: {item.quantity || '0'}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
export default CGetdtAPI;
