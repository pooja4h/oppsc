import React from 'react';
import CustomerService from '../services/CustomerService';

class CustomerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }
    componentDidMount() {
        CustomerService.getCustomers().then((response) => {
            this.setState({ customers: response.data })
        });
    }

    render() {
        return (
            <div>
                <h4>customers list</h4>
                <div className="container">
                    <div className="center">
                        <table className="table table-striped table-bordered " >
                            <thead bgcolor="skyblue" >
                                <tr>
                                    <td>User ID</td>
                                    <td>User First Name</td>
                                    <td>User Last Name</td>
                                    <td>User Address</td>
                                    <td>User Email</td>
                                    <td>User Phone Number</td>
                                    <td>User Username</td>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customers =>
                                            <tr key={customers.id}>
                                                <td>{customers.id}</td>
                                                <td>{customers.firstName}</td>
                                                <td>{customers.lastName} </td>
                                                <td>{customers.address} </td>
                                                <td>{customers.email}</td>
                                                <td>{customers.phoneNo}</td>
                                                <td>{customers.username}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default CustomerComponent