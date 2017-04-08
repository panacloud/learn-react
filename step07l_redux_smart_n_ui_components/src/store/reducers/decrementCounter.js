//Update in counter 9 multiple reducer

// Update in counter 8 import action 
import CounterAction from '../actions/counter'


//Update in counter 10 -- state object
const INITIAL_STATE = {
    decrementState : 0
}

// update in counter 5 -- keeping reducer function in separate file.
//value is state, but we need to use state property in component 
// that's why i have changed variable name here
// Update in coutner 10 -- passing INITIAL_STATE as default value
function decrementCounter(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Update in counter 8 -- using counter static properties in switch case
    // so that it can be controlled from single place  
  case CounterAction.DECREMENT:
    // IMPORTANT: returning simple value therefore it will be avaiable as 
    // simple value and not as object
    // Update in coutner 10 -- Creating new object and updating value in it
    return Object.assign({}, state, { decrementState: state.decrementState - 1 });
    //return value - 1
    // Update in counter 6 -- more type of actions  
  case CounterAction.DECREMENT_WITH_VALUE:
    return Object.assign({}, state, { decrementState: state.decrementState - action.val });
    //return value - action.val;
  default:
    return state
  }
}

export default decrementCounter;