import * as React from "react";
import { Back } from "../Back/Back";

// note: React.Component<props, state>
export class Home extends React.Component<{}, any> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>
                    Home Page
                </h1>
                <Back />
            </div>
        )
    }
}