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
                this.state.arr.map(key =>
                <div> <h2>{key.name}</h2>
                    <h2>Tuổi:{key.age}</h2>
                    <h2>gender:{key.gander}</h2>
                    <h2>major:{key.major}</h2>
                    <h2>Tuổi:{key.}</h2>
                </div>)
            </div>
        )
        
    }
}