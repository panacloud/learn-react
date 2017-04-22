import { createStore } from 'redux'
//Update in counter 9 -- import combineReducers to combine all reducers
//Update in counter 14 -- import applyMiddleware to apply epic's middleware
import { combineReducers, applyMiddleware } from 'redux';

//Update in counter 14 -- import combineEpics to combine all epics and
// createEpicMiddleware to create epic middleware
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import incrementCounter from './reducers/incrementCounter';
import decrementCounter from './reducers/decrementCounter';

import CounterEpic from './epics/counterEpic';

//Update in counter 9 -- this will combine all reducers in one
export const rootReducer = combineReducers({
    incrementCounter,
    decrementCounter
// more reducers go here
})


//Update in counter 14 -- this will combine all epics in one
export const rootEpic = combineEpics(
    CounterEpic.incrementWithValue
    // more epics functions go here
)

//Update in counter 14 -- create epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//Update in counter 14 -- apply middleware
//const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);
const createStoreWithMiddleware = applyMiddleware(epicMiddleware);

//Update in counter 14 -- create store by passing root reducer and middleware
//let store = createStoreWithMiddleware(rootReducer)
let store = createStore(rootReducer,createStoreWithMiddleware)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
