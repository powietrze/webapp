import React, {
  PureComponent,
  PropTypes,
} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Map } from './Map';
import { StationSearchInput } from './Main/StationSearchInput';
import { FavoritedStations } from './Main/FavoritedStations';
import { StationList } from './StationList';
import styles from './Main/Main.css';


export class Main extends PureComponent {
  static propTypes = {
    isLoadingStations: PropTypes.bool.isRequired,
    searchQuery: PropTypes.string.isRequired,
    isLoadingFavoritedStations: PropTypes.bool.isRequired,
    favoritedStations: ImmutablePropTypes.list.isRequired,
    stations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    onStationSelect: PropTypes.func.isRequired,
    onStationSearch: PropTypes.func.isRequired,
  };

  render() {
    const {
      isLoadingStations,
      searchQuery,
      isLoadingFavoritedStations,
      favoritedStations,
      stations,
      onStationSelect,
      onStationSearch,
    } = this.props;

    return (
      <div className={styles.Main}>
        <FavoritedStations
          show={!searchQuery}
          isLoading={isLoadingFavoritedStations}
          stations={favoritedStations}
        />
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
