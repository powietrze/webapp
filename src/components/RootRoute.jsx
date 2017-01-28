import React, {
  PureComponent,
  PropTypes,
} from 'react';

import './body.css';
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
