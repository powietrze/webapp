/* eslint-env browser */


import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import {
  Root,
  Main,
  StationDetails,
} from './components';


const routes = (
  <Router history={createHistory()}>
    <Route path={Root.path} component={Root}>
      <IndexRoute component={Main} />
      <Route path={StationDetails.path} component={StationDetails} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
