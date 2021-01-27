import axios from 'axios';
import React, { Component } from 'react';

const PRODUCTS_BASE_URL = 'http://localhost:8085/api/v1/products';
const REPORT_BASE_URL = 'http://localhost:8085/api/v1/product-report'
class Products extends Component {
    getProducts() {
        return axios.get(PRODUCTS_BASE_URL);
    }

    getProductReport() {
        return axios.get(REPORT_BASE_URL );
    }
}

export default new Products();