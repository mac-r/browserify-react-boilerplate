import React from 'react';
import { render } from 'react-dom';

import { Router, Route, Link, browserHistory, createRoutes, IndexRoute } from 'react-router';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createBrowserHistory from 'history/lib/createBrowserHistory';
const historyLib = require('history');
const historyObj = historyLib.createMemoryHistory();

import reducers from './reducers';

import App from './containers/App';
import Kitchensink from './containers/Kitchensink';
import Test from './containers/Test';
import NotFound from './containers/NotFound';

const store = createStore(
  combineReducers({
    reducers: reducers, routing: routerReducer
  })
);

let history;
if (process.env.SERVER_SIDE) {
  history = historyObj.createLocation();
} else {
  history = syncHistoryWithStore(browserHistory, store);
}

const routesInstance = <Router history={history}>
  <Route path='/' component={App}>
    <IndexRoute component={Kitchensink}/>
    <Route path='kitchensink' component={Kitchensink}/>
    <Route path='test' component={Test}/>
    <Route path='*' component={NotFound}/>
  </Route>
</Router>;

module.exports = {
  routesInstance, routesCollection: createRoutes(routesInstance)
};
