import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers/index'
import App from './components/app';

//this is to debug what's going on the behind scene in redux using redux devtools.

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(
//      reducers,
//      composeEnhancers(applyMiddleware())
//  )
ReactDOM.render(
<Provider store = {createStore(reducers)}>
    <App/>
</Provider>,
 document.getElementById('root'))