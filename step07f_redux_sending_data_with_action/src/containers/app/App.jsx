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
        }
    };
}

class App extends Component {
  render() {
    return (
      <div >
        App {this.props.counter}  
        <div>
          <br/>
          Event in App.jsx <br/>
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
