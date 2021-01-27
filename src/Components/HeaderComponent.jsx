import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import '../App.css'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }


    render() {
        return (
            <div>
                <header className="header">
                    <span><h4><b>Online Photo Shoppe</b></h4></span>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
