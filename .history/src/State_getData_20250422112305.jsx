import React, { Component } from 'react';
import { getStudents }  from './data';
export class State_getData extends Component{
    constructor(props) {
        var arr = getStudents();
        super(props);
        this.state = {arr};
    }
    render() {
        return (
            <div>
                this.state.arr.map(key=)
            </div>
        )
        
    }
}