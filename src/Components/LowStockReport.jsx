import React, { Component } from 'react';
import Products from '../services/Products';

class LowStockReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []

        }

    }
   
   componentDidMount(){
        
        Products.getProductReport().then((response) => {
           this.setState({products:response.data});
        });
    }


    render() {
        return (
            <div>
                <h4>products list</h4>
                <div className="container">
                    <div className="center">
                        <table className="table table-striped table-bordered" >
                            <thead bgcolor="#ffcccc" >
                                <tr>
                                    <td> ID</td>
                                    <td>Product Name</td>
                                    <td>Quantity</td>
                                    <td>Price</td>
                                    <td>Description</td>
                                    <td>Category</td>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        products =>
                                            <tr key={products.id}>
                                                <td>{products.id}</td>
                                                <td>{products.productName}</td>
                                                <td>{products.quantity} </td>
                                                <td>{products.price} </td>
                                                <td>{products.description}</td>
                                                <td>{products.category.name}</td>

                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default LowStockReport;