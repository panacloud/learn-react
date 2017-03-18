import React from "react";
import { connect } from "react-redux";
class Main extends React.Component {
    render() {
        var { value } = this.props;
        return (
            <div>
                {value.map(function (val, i) {
                    return (
                        <div key={i}>
                            <a href={val.html_url} target="blank"><p>{val.name}</p></a>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default connect((state) => {
    var value = state.getRepoReducer;
    return {
        value
    }
})(Main)