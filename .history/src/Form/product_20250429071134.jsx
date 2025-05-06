import React from 'react';

export function Product(type) {
  switch (type) {
    case "products": {
      const products = [
        {
          id: 1,
          name: 'Product 1',
          name_category: 'nam',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 2,
          name: 'Product 2',
          name_category: 'nữ',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 3,
          name: 'Product 3',
          name_category: 'nam',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 4,
          name: 'Product 4',
          name_category: 'nam',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 5,
          name: 'Product 5',
          name_category: 'nữ',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 6,
          name: 'Product 6',
          name_category: 'nam',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 7,
          name: 'Product 7',
          name_category: 'nam',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 8,
          name: 'Product 8',
          name_category: 'nữ',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 9,
          name: 'Product 9',
          name_category: 'nữ',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        },
        {
          id: 10,
          name: 'Product 10',
          name_category: 'nam',
          image: 'https://via.placeholder.com/150',
          price: 10000,
          old_price: 12000,
        }
      ];
      return products; 
    }

    default:
      return [];
  }
}
