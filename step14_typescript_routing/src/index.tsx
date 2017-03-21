import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import { App } from "./App/App";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
        </Route>
    </Router>,
    document.getElementById('root')
);