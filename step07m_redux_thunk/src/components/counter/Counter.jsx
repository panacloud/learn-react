import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

  constructor(){
    super();
    this.state = {
      counterVal : 0
    };
  }
  valueChange(event){
    this.setState({counterVal: parseInt(event.target.value,10)});
  }

  // IMPORTANT
  // Update counter 12 -- this method will call this.props.update function which is
  // provided by App component to this Counter component 
  // like this <Counter update={this.updateCounter.bind(this)} />
  // this.updateCounter is funciton of App component and will be called when we
  // call this updateCounterWithInput
  // Information will go to App component and then App component will use it to 
  // update redux store
  updateCounterWithInput(){
    this.props.update(this.state.counterVal);
    //this.props.incrementWithValue(this.state.counterVal);
  }

  // IMPORTANT
  // Update counter 12 -- this method will call this.props.update function which is
  // provided by App component to this Counter component 
  // like this <Counter update={this.updateCounter.bind(this)} />
  // this.updateCounter is funciton of App component and will be called when we
  // call this updateCounterWithOne
  updateCounterWithOne(){
    this.props.update(1);
  }


  render() {
    return (
      <div >
        <div>
            In Counter jsx
        </div>
        <div>
            Counter {this.props.counter}  <br/>
            <input type="number" onChange={this.valueChange.bind(this)}/><br/>
            <button onClick={this.updateCounterWithInput.bind(this)}>Increment User Input </button><br/>
            <button onClick={this.updateCounterWithOne.bind(this)}>Increment</button><br/>
        </div>
      </div>
    );
  }
}

export default Counter;
