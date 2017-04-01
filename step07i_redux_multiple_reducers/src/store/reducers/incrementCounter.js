//Update in counter 9 multiple reducer

// Update in counter 8 import action 
import CounterAction from '../actions/counter'


// update in counter 5 -- keeping reducer function in separate file.
//value is state, but we need to use state property in component 
// that's why i have changed variable name here
function incrementCounter(value = 0, action) {
  switch (action.type) {
    // Update in counter 8 -- using counter static properties in switch case
    // so that it can be controlled from single place
  case CounterAction.INCREMENT:
    // IMPORTANT: returning simple value therefore it will be avaiable as 
    // simple value and not as object
    return value + 1
  // Update in counter 6 -- more type of actions
  case CounterAction.INCREMENT_WITH_VALUE:
    return value + action.val;
  default:
    return value
  }
}

export default incrementCounter;