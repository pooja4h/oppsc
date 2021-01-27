import React, { Component } from 'react';
import Login from '../services/Login';


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            result: false
        }
        this.changename = this.changename.bind(this);
        this.changepass = this.changepass.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changename = (event) => {
        this.setState({
           username: event.target.value
        })
    }
    changepass = (event) => {
        console.log("changed Password")
        this.setState({
            password: event.target.value
        })
    }
    cancel() {
        this.props.history.push('/')
    }
    handleLogin = (e) => {
        e.preventDefault();

        const login = { username: this.state.username, password: this.state.password }
        Login.getLogin(login).then((res) => {
            console.log(res.data)

            switch (res.data) {
                case "welcome": alert("WELCOME!")
                this.props.history.push('/view-report')
                    break;
                case "please enter correct password": alert("wrong password")
                    break;
                case "user does not exist": alert("user does not exist")
                    break;
                default: alert("invalid creadentials")
            }

        })
    }

    render() {
        return (
            <div>
                <h4>Sign in</h4>
                <form onSubmit={this.handleLogin}>
                    <input
                        placeholder="Enter Username"
                        value={this.state.username}
                        onChange={this.changename}
                        required
                    />
                    <br />
                    

                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changepass}
                        required
                    />
                    <br /><br/>

                    <button type="submit" className="btn btn-primary">Login</button> <span></span><button className="btn btn-danger" onClick={this.cancel}>Cancel</button>
                </form>
            </div>

        )
    }
}

export default LoginComponent