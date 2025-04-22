import React, { Component } from 'react';
import { getStudents }  from './data';
export class State_getData extends Component{
    constructor(props) {
        super(props);
        var arr = getStudents();
        this.state = {arr};
    }
    render() {
        return (
            <div>{
                this.state.arr.map(key =>
                    <div> <h2>{key.name}</h2>
                        <h2>Tuổi:{key.age}</h2>
                        <h2>Gender:{key.gender}</h2>
                        <h2>Major:{key.major}</h2>
                        <h2>Email:{key.email}</h2>
                    </div>)
            }
            </div>
        );
        
    }
}