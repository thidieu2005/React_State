import React, { Component } from 'react';
import { getStudents }  from './data';
export class State_getData extends Component{
    constructor(props) {
        var arr = 
        super(props);
        this.state = {
            students: [],
            loading: true
        };
    }
}