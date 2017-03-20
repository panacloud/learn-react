import React, { Component } from 'react';
import { connect } from "react-redux";
import CounterAction from "../store/actions/index.js"


class App extends Component {

  constructor(props) {

    super(props)
    this.state = {
      count: 0
    }
  }
  handleIncrement() {
    var { dispatch } = this.props;
    dispatch(CounterAction.Increment());
  }

  handleDecrement() {
    var { dispatch } = this.props;
    dispatch(CounterAction.Decrement());
  }

  handleAsyncIncrement() {
    var { dispatch } = this.props;
    dispatch(CounterAction.incrementAsync())
  }

  handleAsyncDecrement() {
    var { dispatch } = this.props;
    dispatch(CounterAction.decrementAsync());
  }
  render() {

    return (
      <form style={{ width: "400px", margin: "0px auto" }}>
        <div>
          <input type="button" value="+" onClick={this.handleIncrement.bind(this)} />Increment
          <input type="button" value="-" onClick={this.handleDecrement.bind(this)} />Decrement
          </div>
          <h1>{this.props.count}</h1>
        <div>
          <input type="button" value="AsyncIncrement" onClick={this.handleAsyncIncrement.bind(this)} />
          <input type="button" value="AsyncDecrement" onClick={this.handleAsyncDecrement.bind(this)} />
        </div>
  
      </form>
    );
  }
}

export default connect()(App);
