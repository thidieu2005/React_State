import React, { useEffect, useState } from 'react';
export class CGetdtAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
}