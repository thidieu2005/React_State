import React, { Component } from 'react';
import { Member } from './components/Member'
import './App.css'

function App() extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hồ Thị Diệu'
      age: 20,
      
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Member List</h1>
        <ul>
          {this.state.members.map(member => (
            <Member key={member.id} member={member} />
          ))}
        </ul>
      </div>
    );
  }
 
}

export default App
