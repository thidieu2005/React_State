import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
export class S_hcn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lenght: 0,
            width: 0,
            area:0,
        }
    }
    handleLenghtChange = (event) => {
        this.setState({ lenght: event.target.value });
    };
    handleWidthChange = (event) => {
        this.setState({ width: event.target.value });
    };
    handleCalculateArea = () => {
        const { lenght, width } = this.state;
        const area = lenght * width;
        this.setState({ area });
    };
    
}

