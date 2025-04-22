import React, { Component } from 'react';
import {getStudents  from './data';
export class State_getData extends Component{
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            loading: true
        };
    }
}