/* eslint-env browser */


import Inferno from 'inferno';
import {Router, Route, IndexRoute, Link} from 'inferno-router';
import {createBrowserHistory} from 'history';

import {App} from './App.jsx';


const Main = () => (
  <div>
    Main
    <Link to="/a">Go to A</Link>
  </div>
);

const A = () => (
  <div>
    Route A. Go to: <Link to="/">Root</Link> <Link to="/b">B</Link>
  </div>
);

const B = () => (
  <div>
    Route B. Go to: <Link to="/">Root</Link> <Link to="/a">A</Link>
  </div>
);

const routes = (
  <Router history={ createBrowserHistory() }>
    <Route component={App}>
      <IndexRoute component={Main}/>
      <Route path="a" component={A}/>
      <Route path="b" component={B}/>
    </Route>
  </Router>
);

Inferno.render(routes, document.getElementById('root'));
