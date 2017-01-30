import React, {
  PureComponent,
  PropTypes,
} from 'react';

import { Map } from './Map';
import { StationSearchInput } from './Main/StationSearchInput';
import { StationList } from './StationList';
import styles from './Main/Main.css';


export class Main extends PureComponent {
  static propTypes = {
    isLoadingStations: PropTypes.bool.isRequired,
    stations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    searchQuery: PropTypes.string.isRequired,
    onStationSelect: PropTypes.func.isRequired,
    onStationSearch: PropTypes.func.isRequired,
  };

  render() {
    const {
      isLoadingStations,
      stations,
      searchQuery,
      onStationSelect,
      onStationSearch,
    } = this.props;

    return (
      <div className={styles.Main}>
        <Map stations={stations} onStationSelect={onStationSelect} />
        <StationSearchInput
          value={searchQuery}
          onChange={onStationSearch}
        />
        <StationList isLoading={isLoadingStations} stations={stations} />
      </div>
    );
  }
}
