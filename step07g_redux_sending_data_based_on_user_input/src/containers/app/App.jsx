import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        // counter - this will be component's property counter and can be accessed
        // as this.props.counter
        // state - this will be the state of redux, whatever value we return from
        // reducer function will be in state, for now we are sending simple numaric
        // value therefore it will be simple integer
        counter: state,
    };
}

// Update in counter 4
// increment and decrement will be functions and will be 
// available in this.props.increment and this.props.decrement.

// store object is not avaiable here so we will map dispatch to properties and
// pass it in connect function then redux will map it
function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        // update in counter 6 -- sending value in action
        decrement: () => dispatch({ type: 'DECREMENT_WITH_VALUE',val:4 }),
        incrementAgain : function (){
          console.log("Incrementing value ");
          // any logic and come here

          // then return dispatch
          return dispatch({ type: 'INCREMENT_WITH_VALUE',val:3 });
        },

        // Update in counter 7 -- calling it from component
        incrementWithValue : function (value){
          console.log("Incrementing with value");
          return dispatch({ type: 'INCREMENT_WITH_VALUE',val:value });
        }
    };
}

class App extends Component {

  constructor(){
    super();

    // Update in counter 7 -- created component state to update value from user input
    this.state = {
      counterVal : 0
    };
  }

  // Update in counter 7 -- bind on input change event and updating state 
  valueChange(event){
    this.setState({counterVal: parseInt(event.target.value)});
  }

  // Update in counter 7 -- bind on button to fire action with user input
  handelClick(){
    this.props.incrementWithValue(this.state.counterVal);
  }

  // Update in counter 7 -- added input text box and another button
  render() {
    return (
      <div >
        App {this.props.counter}  
        <div>
          <br/>
          Event in App.jsx <br/>
          <input type="number" onChange={this.valueChange.bind(this)}/><br/>
          <button onClick={this.handelClick.bind(this)}>Increment User Input </button><br/>
          <button onClick={this.props.increment}>Increment</button><br/>
          <button onClick={this.props.decrement}>Decrement value with 4</button><br/>
          <button onClick={this.props.incrementAgain}>Increment value with 3</button><br/>
          
        </div>      
      </div>
    );
  }
}

// connect function will wrap component and attached properties
// from mapStateToProps into App component
// Update in coutner 4 -- sending mapDispatchToProps in connect
export default connect(mapStateToProps,mapDispatchToProps)(App);
