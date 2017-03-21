import * as React from "react";
import { Back } from "../Back/Back";

// note: React.Component<props, state>
export class About extends React.Component<any, any> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>
                    About Page
                </h1>
                <Back />
            </div>
        )
    }
}