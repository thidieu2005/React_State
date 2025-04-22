import React, { Component } from 'react';
import { Member } from './components/Member'
import './App.css'

function App() extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Alice Johnson', age: 28 },
      ],
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
