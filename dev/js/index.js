import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import thunk from 'redux-thunk';
import allReducers from './reducers'
import Authentication from './authentication/auth0-authentication';

import { App, Map } from './components/App'
import { REDIRECT_URL } from './authentication/constants';


const middleware = applyMiddleware(thunk);
// Next line is used for redux devtools to work, only for local environment
/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const enhancer = true ? composeEnhancer(middleware) : middleware;

const getInitialState = () => {
  return {};
};

const clientId = '84vHiRQ-jsS6ihrAcJoBnRXVJcLBu6nm';
const domain = 'liusha.auth0.com';
const auth = new Authentication(clientId, domain, REDIRECT_URL, localStorage);


const isCurrentPageRoot = () => browserHistory.getCurrentLocation().pathname === '/';

const verifyAuthenticated = () => {
  if (!auth.isLoggedIn()) {
    console.log('need to login');
    if (!isCurrentPageRoot()) browserHistory.push('/');
    auth.showLoginDialog();
    console.log('show login window');
  } else {
    console.log('no need to login');
  }
  return true;
};


const store = createStore(allReducers, getInitialState(), enhancer);
console.log('App = ', App);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/auth0_authenticated" />
        <Route path="/" component={App} onEnter={verifyAuthenticated}>
          <Route path="/map" component={Map} />
        </Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
