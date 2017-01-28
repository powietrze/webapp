import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { RootContainer } from './components/RootContainter';
import { MainContainer } from './components/MainContainer';
import { StationDetailsContainer } from './components/StationDetails';


export class Root extends React.PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    browserHistory: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { store, browserHistory } = this.props;

    return (
      <Provider store={store}>
        <Router history={syncHistoryWithStore(browserHistory, store)}>
          <Route path={RootContainer.path} component={RootContainer}>
            <IndexRoute component={MainContainer} />
            <Route path={StationDetailsContainer.path} component={StationDetailsContainer} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
