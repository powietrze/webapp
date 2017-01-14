/* eslint-env browser */


import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import {createHistory} from 'history';

import {Root} from './components';
import {Main} from './components';
import {StationDetails} from './components';


const routes = (
  <Router history={ createHistory() }>
    <Route path="/" component={Root}>
      <IndexRoute component={Main}/>
      <Route path="/station/:id" component={StationDetails}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
