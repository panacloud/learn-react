import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildCom from './components/ChildCom'

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter : 0
    };
    this.updateCounter();
  }

  updateCounter(){
    setInterval(()=>{
      this.setState({counter: this.state.counter+1});
    },500)
  }


  render() {
    return (
      <div>
        {this.props.name}
        <ChildCom with="Tea" quantity={this.state.counter}/>
        <br/>
        {this.state.counter}
      </div>
    );
  }
}

export default App;
