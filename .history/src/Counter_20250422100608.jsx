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