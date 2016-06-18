import React, { Component } from 'react';


export class App extends Component {
  constructor(){
      super();
      this.state = { counter: 0};
  }
  render(){
 
    return (
      <div> 
        <div>
        {this.state.counter}
        </div>
        <button onClick={
                          ()=>this.setState({counter: this.state.counter + 1})  
                      }>Add</button>

      </div>
    ); 
  }
}


