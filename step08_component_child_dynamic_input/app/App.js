import React, { Component } from 'react';
import {Child} from './Child';

export class App extends Component {
  constructor(){
      super();
      this.state = { counter: 10};
      setInterval(()=> this.setState({counter: this.state.counter + 1}), 1000);
      
  }



  render(){
    
    return (
      <div> 
        This is from the Root Component
        <Child data={this.state.counter}></Child>
      </div>
    ); 
  }
}


