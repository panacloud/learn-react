import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildCom from './components/ChildCom'

class App extends Component {

  render() {
    return (
      <div>
        {this.props.name}
        <ChildCom with="Biscuit" />
      </div>
    );
  }
}

export default App;
