import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hồ Thị Diệu',
      age: 20
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Member List</h1>
        <h2>Name: {this.state.name}</h2>
        <h2>Age: {this.state.age}</h2>
      </div>
    );
  }
}

export default App;
