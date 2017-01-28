/* eslint-env browser */


import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { routerReducer, routerMiddleware } from 'react-router-redux';

import { createHistory } from 'history';
import { AppContainer } from 'react-hot-loader';

import { main, stationDetails, stations } from './reducers';
import { Root } from './Root';


const browserHistory = createHistory();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || // eslint-disable-line no-underscore-dangle
  compose;
const store = createStore(
  combineReducers({
    routing: routerReducer,
    main,
    stationDetails,
    stations,
  }),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory))),
);


render(
  <AppContainer>
    <Root store={store} browserHistory={browserHistory} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const RootContainer = require('./Root').Root; // eslint-disable-line global-require
    render(
      <AppContainer>
        <RootContainer
          store={store}
          browserHistory={browserHistory}
        />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
