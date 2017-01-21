/* eslint-env browser */


import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import { main, stations } from './reducers';
import {
  RootContainer,
  MainContainer,
  StationDetailsContainer,
} from './components';


const browserHistory = createHistory();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || // eslint-disable-line no-underscore-dangle
  compose;
const store = createStore(
  combineReducers({
    routing: routerReducer,
    main,
    stations,
  }),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory))),
);

const routes = (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path={RootContainer.path} component={RootContainer}>
        <IndexRoute component={MainContainer} />
        <Route path={StationDetailsContainer.path} component={StationDetailsContainer} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
