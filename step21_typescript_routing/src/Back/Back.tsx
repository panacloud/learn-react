import * as React from "react";
import { browserHistory } from 'react-router';

// note: React.Component<props, state>
export class Back extends React.Component<any, any> {

    constructor() {
        super();
    }

    goBack(e) {
        e.preventDefault();
        browserHistory.goBack();
    }

    render() {
        return (
            <div>
                <span onClick={this.goBack} style={{color: 'purple'}}>back...</span> 
            </div>
        )
    }
}