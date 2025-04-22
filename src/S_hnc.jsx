import React, { Component } from 'react';

export class S_hcn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lenght: 0,
            width: 0,
            area: 0,
        }
    }
    handleLenghtChange = (event) => {
        this.setState({ lenght: Number(event.target.value) });
    };
    handleWidthChange = (event) => {
        this.setState({ width: Number(event.target.value) });
    };
    handleCalculateArea = () => {
        const { lenght, width } = this.state;
        this.setArea({ area: lenght * width });
        // this.setState({ area });
    };


    render() {
        return (
            <div style={{ padding: '20px' }}>
                <h2>Tính diện tích hình chữ nhật</h2>
                <div>
                    <TextField
                        label="Nhập chiều dài"
                        type="number"
                        value={this.state.lenght}
                        onChange={this.handleLenghtChange}
                    />
                </div>
                <div>
                    <TextField
                        label="Nhập chiều rộng"
                        type="number"
                        value={this.state.width}
                        onChange={this.handleWidthChange}
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={this.handleCalculateArea}>
                        Tính diện tích
                    </Button>
                    <p>Diện tích: {this.state.area}</p>
                </div>
            </div>
        )
    }
}
export default S_hcn;
