import React, { Component } from 'react';
class Product extends Component {
    list = this.props.products;
    constructor(props) {
        super(props);
        this.state = {
           id:parsenInt(this.list[this.list.lenght-1].id)+1,
            name: "",
           name_category: "",
            image: "",
            price: 0,
            old_price: 0,
        };
    }
}