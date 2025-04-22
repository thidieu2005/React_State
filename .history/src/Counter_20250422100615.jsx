import React, { Component } from react;
export class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
}
increase =() => {
    this.setState({count: this.state.count + 1});
}
render