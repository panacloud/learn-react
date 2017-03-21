import * as React from "react";

export class ShowCounter extends React.Component<any, any> {

    constructor() {
        super();
    }

    render() {
        return (
            <h3>Count: {this.props.counter}</h3>
        )
    }
}