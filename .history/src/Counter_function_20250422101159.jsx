import React, { Component } from 'react';
export class Counter_function extends Component{
    const [count, setCount] = useState(0);
 
 render(){
     return(
         <div>
             <h1>Count: {this.state.count}</h1>
             <button onClick={()}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
         </div>
     );
 }
}