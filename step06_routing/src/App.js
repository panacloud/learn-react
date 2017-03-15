import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Dashboard from './components/dashboard';
import Profile from './components/profile';
import About from './components/about';
import Contact from './components/contact';
import NoMatch from './components/nomatch';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Dashboard}>
                    <IndexRoute component={Profile} />
                    <Route path="profile" component={Profile} />
                    <Route path="about" component={About} />
                    <Route path="contact" component={Contact} />
                </Route>
                <Route path="*" component={NoMatch} />
            </Router>
        )
    }
}
export default App;