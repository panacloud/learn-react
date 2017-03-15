import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildCom from './components/ChildCom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      outputOfChild: ""
    };

    this.handler = this.handler.bind(this);
    //we can not use 'this.setState' in handler method,
    //until we bind class 'this' with handler method
    //we can also bind methods on the fly, e.g: proceed method in ChildCom
  }

  handler(data) {
    this.setState({
      outputOfChild: data
    });
  }

  render() {
    return (
      <div>
        <ChildCom handle={this.handler} />
        {this.state.outputOfChild}
      </div>
    );
  }
}
export default App;
