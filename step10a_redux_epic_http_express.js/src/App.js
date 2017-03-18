import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ajaxAction } from './store/action/action-ajax'

function mapStateToProps(state) {
    return {
        data: state.ajaxReducer.data,
        isError: state.ajaxReducer.isError,
        loading: state.ajaxReducer.loading,
    }
}
function matchDispatchToProps(dispatch) {
    return {
        insertName: (name) => { dispatch(ajaxAction.insertName(name)) },
        getNames: () => { dispatch(ajaxAction.getNames()) },
    }
}
class App extends Component {

    constructor(props){
        super(props)
        this.props.getNames();
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps: ",nextProps)
        if (nextProps.isError)
            alert("ajax error, check logs");
    }
    render() {
        return (
            <div>
                <h2> Ajax Request Example: </h2>
                <input type="text" ref="name" placeholder="your name here" />
                <button onClick={() => { this.props.insertName(this.refs.name.value) }}>Post Name</button>

                {(this.props.data) ? <ul>
                    {this.props.data.map((value, index, whole) => {
                        return <li>{value}</li>
                    })}
                </ul> : (this.props.loading) ? <p>Loading...</p> : <p>No Data</p>}
            </div>
        );
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(App);

