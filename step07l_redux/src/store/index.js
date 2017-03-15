import { createStore } from 'redux'
//Update in counter 9 -- import combineReducers to combine all reducers
import { combineReducers } from 'redux';

import incrementCounter from './reducers/incrementCounter';
import decrementCounter from './reducers/decrementCounter';

//Update in counter 9 -- this will combine all reducers in one
export const rootReducer = combineReducers({
    incrementCounter,
    decrementCounter
// more reducers go here
})

//Update in counter 9 -- passing root reducer
let store = createStore(rootReducer)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
