import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App"
import {Provider} from "react-redux";
var store = require("./configure/store.js").storeConfig();
ReactDOM.render(
 <Provider store = {store}>
   <App/>
 </Provider>
 ,
  document.getElementById('root')
);
