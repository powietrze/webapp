import React, {
  PureComponent,
  PropTypes,
} from 'react';

import './body.css';
import { config } from '../config';
import { StationDetailsContainer } from './StationDetails';
import { NavBar } from './NavBar';
import styles from './RootRoute.css';


export class RootRoute extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    router: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }),
    stationName: PropTypes.string,
    fetchStations: PropTypes.func.isRequired,
  };

  static path = '/';

  componentDidMount = () => {
    this.props.fetchStations();
    mountGoogleAnalytics();
  };

  handlePop = () => {
    this.props.router.goBack();
  };

  render() {
    const { router, stationName } = this.props;
    const showBackButton = !router.isActive(RootRoute.path, true);
    const showStationName =
      router.isActive(StationDetailsContainer.path.replace(':id', router.params.id));
    const title = showStationName ? stationName : undefined;

    return (
      <div className={styles.root}>
        <NavBar
          showBackButton={showBackButton}
          customTitle={title}
          onPop={this.handlePop}
        />
        {this.props.children}
      </div>
    );
  }
}

function mountGoogleAnalytics() {
  console.log('config.googleAnalyticsTrackingId', config.googleAnalyticsTrackingId)
  if (config.googleAnalyticsTrackingId) {
    /* eslint-disable */
    (function (i, s, o, g, r, a, m) {
      i.GoogleAnalyticsObject = r;
      i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    }(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'));

    ga('create', config.googleAnalyticsTrackingId, 'auto');
    ga('send', 'pageview');
    /* eslint-enable */
  }
}
