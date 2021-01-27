import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../App.css';
import CustomerComponent from './CustomerComponent';
import Products from '../services/Products';

class HomePageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.viewCustomer = this.viewCustomer.bind(this);
        this.viewProducts = this.viewProducts.bind(this);
        this.viewReport = this.viewReport.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }
    viewCustomer() {
        this.props.history.push('/customer-details')
    }
    viewProducts() {
        this.props.history.push('/view-products')
    }
    viewReport() {
        this.props.history.push('/view-reports')
    }
    handleLogin() {
        this.props.history.push('/login')
    }
    render() {
        return (
            <div className="home-page ">
                <div className="container" >
                    <h1>HELLO</h1>
                    <br />
                    <div>
                        
                    </div>
                </div>


            </div>
        );
    }
}

export default HomePageComponent;