import * as React from "react";
import { Link } from "react-router";

// note: React.Component<props, state>
export class App extends React.Component<any, any> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h6>App Component...... (optional: also placed nav bar)</h6>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                    <li style={{display: 'inline-block', marginRight: 20}}>
                         <Link className="navbar-brand" to="/home">Home</Link> 
                    </li>
                    <li style={{display: 'inline-block', marginRight: 20}}> 
                        <Link className="navbar-brand" to="/about">About</Link> 
                    </li>
                    <li style={{display: 'inline-block', marginRight: 20}}> 
                        <Link className="navbar-brand" to="/contact">Contact</Link> 
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}