//Update in counter 9 multiple reducer

// Update in counter 8 import action 
import CounterAction from '../actions/counter'

//Update in counter 10 -- state object
const INITIAL_STATE = {
    incrementState : 0
}

// update in counter 5 -- keeping reducer function in separate file.
//value is state, but we need to use state property in component 
// that's why i have changed variable name here
// Update in coutner 10 -- passing INITIAL_STATE as default value
function incrementCounter(state = INITIAL_STATE, action) {
  switch (action.type) {
    // Update in counter 8 -- using counter static properties in switch case
    // so that it can be controlled from single place
  case CounterAction.INCREMENT:
    // IMPORTANT: returning simple value therefore it will be avaiable as 
    // simple value and not as object
    //return value + 1
    return Object.assign({}, state, { incrementState: state.incrementState + 1 });
  // Update in counter 14 -- using action update value in epic
  case CounterAction.INCREMENT_WITH_VALUE_SUCCESSFUL:
    //return value + action.val;
    return Object.assign({}, state, { incrementState: state.incrementState + action.val });
  default:
    return state
  }
}

export default incrementCounter;