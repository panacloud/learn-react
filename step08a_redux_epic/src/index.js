import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  //Wraping up in Provider
  <Provider store={store}>
    <div>
      <App/>
    </div>
  </Provider>
  ,
  document.getElementById('root')
);
