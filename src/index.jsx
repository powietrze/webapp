/* eslint-env browser */


import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import {createHistory} from 'history';

import {stations} from './reducers';
import {
  RootContainer,
  MainContainer,
  StationDetails,
} from './components';


const store = createStore(
  stations,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const routes = (
  <Provider store={store}>
    <Router history={createHistory()}>
      <Route path={RootContainer.path} component={RootContainer}>
        <IndexRoute component={MainContainer}/>
        <Route path={StationDetails.path} component={StationDetails}/>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
