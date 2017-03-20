import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { store } from './store/index';
import { App } from "./container/App/App";
import Home from "./container/Home/Home";
import About from "./container/About/About";
import { Contact } from "./container/Contact/Contact";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);