import React, { useState, useEffect } from 'react';
export function Product(data) {
    switch (data) {
        case 'products':
            {
                const products = [{
                    id: 1,
                    name: 'Product 1',
                    name_category: 'nam',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                },
                {
                    id: 2,
                    name: 'Product 1',
                    name_category: 'nữ',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                },
                {
                    id: 3,
                    name: 'Product 1',
                    name_category: 'nam',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                },
                {
                    id: 4,
                    name: 'Product 1',
                    name_category: 'nam',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                },
                {
                    id: 5,
                    name: 'Product 1',
                    name_category: 'nữ',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                }, {
                    id: 6,
                    name: 'Product 1',
                    name_category: 'nam',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                }, {
                    id: 7,
                    name: 'Product 1',
                    name_category: 'nam',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                },
                {
                    id: 8,
                    name: 'Product 1',
                    name_category: 'nữ',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                },
                {
                    id: 9,
                    name: 'Product 1',
                    name_category: 'nữ',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                },
                {
                    id: 10,
                    name: 'Product 1',
                    name_category: 'nam',
                    image: 'https://via.placeholder.com/150',
                    price: 10000,
                    old_price: 12000,
                }]
            }
            return products;
        default:
            return n;
          
    }
}