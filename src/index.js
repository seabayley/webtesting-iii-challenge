import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { reducer } from './reducers'

import './index.css';

import Dashboard from './dashboard/Dashboard';

const store = createStore(reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>
    , document.getElementById('root'));



