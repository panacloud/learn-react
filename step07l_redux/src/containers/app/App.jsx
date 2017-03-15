import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
//Update in counter 8 -- import Counter action
import CounterAction from './../../store/actions/counter'

import Counter from '../../components/counter/Counter'

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        // counter - this will be component's property counter and can be accessed
        // as this.props.counter
        // state - this will be the state of redux, whatever value we return from
        // reducer function will be in state, for now we are sending simple numaric
        // value therefore it will be simple integer
        
        //counter: state,
        
        //Update in counter 9 -- now we have multipe reducer therefore state will be object containing each reducer
        
        // Update in counter 10 -- As we are maintaing state as object so whatever state we have in reducer will be
        // avaiable as object so we access them as state.incrementCounter.incrementState
        // state - is object with contains mutiple reducer
        // incrementCounter/decrementCounter - are reducers
        // incrementState/decrementState -- are properties in each reducer
        incCounter : state.incrementCounter.incrementState,
        decCounter : state.decrementCounter.decrementState


    };
}

// Update in counter 4
// increment and decrement will be functions and will be 
// available in this.props.increment and this.props.decrement.

// store object is not avaiable here so we will map dispatch to properties and
// pass it in connect function then redux will map it
function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(CounterAction.increment()),
        // update in counter 6 -- sending value in action
        decrement: () => dispatch(CounterAction.decrementWithValue(4)),
        incrementAgain : function (){
          console.log("Incrementing value ");
          // any logic and come here

          // then return dispatch
          return dispatch(CounterAction.incrementWithValue(3));
        },

        // Update in counter 7 -- calling it from component
        incrementWithValue : function (value){
          console.log("Incrementing with value");
          return dispatch(CounterAction.incrementWithValue(value));
        }
    };
}

class App extends Component {

  // Update counter 12 -- this method will be passed to Counter component and then
  // Counter component will call it and pass value which will be used here to
  // call this.props.incrementWithValue
  updateCounter(value){
    this.props.incrementWithValue(value);
  }

  render() {
    return (
      <div >
        <Counter counter={this.props.incCounter + this.props.decCounter} update={this.updateCounter.bind(this)} />
        <hr/>
        <div>
            <div>
              App.jsx
            </div>
            App {this.props.incCounter + this.props.decCounter}  
            <div>
              <br/>
              Event in App.jsx <br/>
              
              <button onClick={this.props.decrement}>Decrement value with 4</button><br/>
              <button onClick={this.props.incrementAgain}>Increment value with 3</button><br/>
              
            </div>
        </div>      
      </div>
    );
  }
}

// connect function will wrap component and attached properties
// from mapStateToProps into App component
// Update in coutner 4 -- sending mapDispatchToProps in connect
export default connect(mapStateToProps,mapDispatchToProps)(App);
