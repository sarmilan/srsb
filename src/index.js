import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './App';
import Review from './Review';
import CardContainer from './cardc';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={CardContainer} />
            <Route path="/review" component={Review} />
        </Route>
    </Router>
), document.getElementById('root')
);

registerServiceWorker();