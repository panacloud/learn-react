import React from "react";
import { connect } from "react-redux";
import App from "../components/App.js"
class Main extends React.Component {
    render() {
        return (
            <div>
                <App count={this.props.count} />
            </div>
        )
    }
}
export default connect((state) => {
    return {
        count: state.counterReducer
    }
})(Main)