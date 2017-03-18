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
        getUserRepos: (username) => { dispatch(ajaxAction.getUserRepos(username)) },
    }
}
class App extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.isError)
            alert("error getting repos, check logs");
    }
    render() {
        return (
            <div>
                <h2> Ajax Request Example: </h2>
                <input type="text" ref="username" placeholder="github username" />
                <button onClick={() => { this.props.getUserRepos(this.refs.username.value) }}>Get User Repos</button>

                {(this.props.data) ? <ul>
                    {this.props.data.map((value, index, whole) => {
                        return <li>{value.name}</li>
                    })}
                </ul> : (this.props.loading) ? <p>Loading...</p> : <p>No Data</p>}
            </div>
        );
    }
}
export default connect(mapStateToProps, matchDispatchToProps)(App);

