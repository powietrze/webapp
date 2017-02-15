import React, {
  PureComponent,
  PropTypes,
} from 'react';

import { SensorList } from '../StationDetails/SensorList';
import styles from './FavoritedStation.css';


export class FavoritedStation extends PureComponent {
  static propTypes = {
    station: PropTypes.object.isRequired,  // eslint-disable-line react/forbid-prop-types
  };

  render() {
    const { station } = this.props;

    return (
      <div className={styles.FavoritedStation}>
        <span className={styles.Name}>{station.get('name')}</span>
        <SensorList isLoading={false} sensors={station.get('sensors')} />
      </div>
    );
  }
}
