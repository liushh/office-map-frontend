import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers'
import App from './components/App'

const middleware = applyMiddleware(thunk);
// Next line is used for redux devtools to work, only for local environment
/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const enhancer = true ? composeEnhancer(middleware) : middleware;

const getInitialState = () => {
  return {};
};

const store = createStore(allReducers, getInitialState(), enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
