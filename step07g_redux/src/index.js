import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';


import store from './store'
import { Provider } from 'react-redux'

// update in counter 6 -- sending value in action
function handleIncrement(){
  store.dispatch({ type: 'INCREMENT_WITH_VALUE', val:2 })
}

ReactDOM.render(

  //Wraping up in Provider
  
  <Provider store={store}>
  <div>
    <App/>
    <div>
      <br/>
      Events from Index.jxs <br/>
      <button onClick={()=>store.dispatch({ type: 'INCREMENT_WITH_VALUE',val:5  })}>Increment value with 5</button><br/>
      <button onClick={()=>store.dispatch({ type: 'DECREMENT' })}>Decrement</button><br/>
      <button onClick={handleIncrement}>Increment with Handler with value 2</button><br/>
    </div>
  </div>
  </Provider>
  ,
  document.getElementById('root')
);
