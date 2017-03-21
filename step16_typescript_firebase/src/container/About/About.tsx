import * as React from "react";
import { connect } from "react-redux";

import { Back } from "../../component/Back/Back";
import { ShowCounter } from "../../component/CounterShow/Counter";

function mapStateToProps(state: any) {
    return {
        counter: state.counterReducer['count'],
    };
}

// note: React.Component<props, state>
class About extends React.Component<any, any> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>
                    About Page
                </h1>
                <ShowCounter counter={this.props.counter} />
                <Back />
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(About);