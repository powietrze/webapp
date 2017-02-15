import React, {
  PureComponent,
  PropTypes,
} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { FavoritedStation } from './FavoritedStation';
import styles from './FavoritedStations.css';


export class FavoritedStations extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    stations: ImmutablePropTypes.list.isRequired,
  };

  render() {
    const { isLoading, stations } = this.props;

    if (stations.size === 0) {
      return null;
    }

    return (
      <div className={styles.FavoritedStations}>
        <span className={styles.Title}>Obserwowane stacje:</span>
        {isLoading && <span className={styles.Loading}>Ładuję...</span>}
        {stations.map(s => <FavoritedStation key={s.get('id')} station={s} />)}
      </div>
    );
  }
}
