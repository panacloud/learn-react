import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import UserAction from './../../store/actions/user'

import User from '../../components/user/User'

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        repoList : state.userReducer.repoList,
        followersList : state.userReducer.followersList

    };
}

// store object is not avaiable here so we will map dispatch to properties and
// pass it in connect function then redux will map it
function mapDispatchToProps(dispatch) {
    return {
        fetchUserData : function (){
          return dispatch(UserAction.getData());
        }
    };
}

class App extends Component {

  render() {
    return (
      <div >
        <User {...this.props} />
        <hr/>
        
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
