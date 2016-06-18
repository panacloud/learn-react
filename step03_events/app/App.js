import React, { Component } from 'react';


export class App extends Component {
  constructor(){
      super();
      this.state = { counter: 0};
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({counter: this.state.counter + 1});
  }

  render(){
 
    return (
      <div> 
        <div>
        {this.state.counter}
        </div>
        <button onClick={this.handleClick}>Add</button>

      </div>
    ); 
  }
}


