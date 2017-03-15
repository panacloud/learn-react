import React, { Component } from 'react';
import { Link } from 'react-router'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Link to="/profile"> Profile </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <br />
                {this.props.children}
            </div>
        )
    }
}
export default Dashboard;