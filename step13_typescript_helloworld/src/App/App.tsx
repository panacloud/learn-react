import * as React from "react";

// note: React.Component<props, state>
export class App extends React.Component<{}, any> {

    constructor() {
        super();
    }

    render() {
        return (
            <h1>
                Hello World using React!!
            </h1>
        )
    }
}