import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomerComponent from './Components/CustomerComponent'
import HomePageComponent from './Components/HomePageComponent'
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import ProductList from './Components/ProductList';
import LoginComponent from './Components/LoginComponent';
import LowStockReport from './Components/LowStockReport';
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <div >

          <div className="container">
          <div class="sidenav">
                    <a href="/view-products">View All Products</a>
                    <a href="/view-reports">Low StockReport"</a>
                    <a href="/customer-details">Customer Details</a>
                    <a href="/login">Login</a>
                </div>
            <Switch>
              <Route path="/" exact component={HomePageComponent}></Route>
              <Route path="/customer-details" component={CustomerComponent}></Route>
              <Route path="/view-products" component={ProductList}></Route>
              <Route path="/view-reports" component={LowStockReport}></Route>
              <Route path="/login" component={LoginComponent}></Route>
              <CustomerComponent />
            </Switch>
          </div>
        </div>
      </Router>
      <FooterComponent />
    </div>
    
  );
}

export default App;
