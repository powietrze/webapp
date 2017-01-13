/* eslint-env browser */


import Inferno from 'inferno';
import {Router, Route, IndexRoute, Link} from 'inferno-router';
import {createBrowserHistory} from 'history';

import {Root} from './components';
import {Main} from './components';
import {StationDetails} from './components';


const routes = (
  <Router history={ createBrowserHistory() }>
    <Route component={Root}>
      <IndexRoute component={Main}/>
      <Route path="/station/:id" component={StationDetails}/>
    </Route>
  </Router>
);

Inferno.render(routes, document.getElementById('root'));
