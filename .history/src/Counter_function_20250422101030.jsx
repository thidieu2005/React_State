import React, { Component } from 'react';
export class Counter_function extends Component{
    constructor

 increase =() => {
    this.setState({count: this.state.count + 1});
 }
 render(){
     return(
         <div>
             <h1>Count: {this.state.count}</h1>
             <button onClick={this.increase}>Increase</button>
         </div>
     );
 }
}