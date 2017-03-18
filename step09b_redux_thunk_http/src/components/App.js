import React, { Component } from 'react';
import { connect } from "react-redux"
import Main from "../components/main.js"
import { getRepo } from "../actions/index.js"


class App extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var { dispatch } = this.props;
    var value = this.refs.text.value;
    dispatch(getRepo(value));//dispatching action getRepo
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} style={{width:"400px",margin:"0px auto"}}>
        <h1>Ajax Request Example</h1>
        <div>
          <input type="text" ref="text" placeholder = "Your github username"/>
          <input type="submit" value="search" />
        </div>
        <Main/> {/*data is render in main component*/}
      </form>
    );
  }
}
export default connect()(App);