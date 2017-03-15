import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

  render() {
    return (
      <div >
        <div>
            In Counter jsx
        </div>
        <div>
            Counter {this.props.counter}  
        </div>
      </div>
    );
  }
}

export default Counter;
