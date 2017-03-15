import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

//value is state, but we need to use state property in component 
// that's why i have changed variable name here
function counter(value = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    // IMPORTANT: returning simple value therefore it will be avaiable as 
    // simple value and not as object
    return value + 1
  case 'DECREMENT':
    return value - 1
  default:
    return value
  }
}
/*
export const rootReducer = combineReducers({
    counter
// more reducers go here
})*/
let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

function handleIncrement(){
  store.dispatch({ type: 'INCREMENT' })
}

ReactDOM.render(

  //Wraping up in Provider
  // Update in Counter 3 is button and click event
  <Provider store={store}>
  <div>
    <App/>
    <div>
      <button onClick={()=>store.dispatch({ type: 'INCREMENT' })}>Increment</button><br/>
      <button onClick={()=>store.dispatch({ type: 'DECREMENT' })}>Decrement</button><br/>
      <button onClick={handleIncrement}>Increment with Handler</button><br/>
    </div>
  </div>
  </Provider>
  ,
  document.getElementById('root')
);
