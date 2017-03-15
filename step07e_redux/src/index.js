import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';

// updated in counter 5 -- importing store form store folder's index.js
import store from './store'
import { Provider } from 'react-redux'

function handleIncrement(){
  store.dispatch({ type: 'INCREMENT' })
}

ReactDOM.render(

  //Wraping up in Provider
  
  <Provider store={store}>
  <div>
    <App/>
    <div>
      <br/>
      Events from Index.jxs <br/>
      <button onClick={()=>store.dispatch({ type: 'INCREMENT' })}>Increment</button><br/>
      <button onClick={()=>store.dispatch({ type: 'DECREMENT' })}>Decrement</button><br/>
      <button onClick={handleIncrement}>Increment with Handler</button><br/>
    </div>
  </div>
  </Provider>
  ,
  document.getElementById('root')
);
