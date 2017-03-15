import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ChildCom from './components/ChildCom'

class App extends Component {
  // for initial state run only once
  constructor(props) {
    super(props)
    // console.log("constructor method")
  }
  //mounting lifeCycles
  componentWillMount() {
    console.log("componentWillMount method")
  }
  componentDidMount() {
    console.log("componentDidMount method")
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps method")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate method")
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate method")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate method")
  }
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
