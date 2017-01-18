import React, {
  PureComponent,
  PropTypes,
} from 'react';

import { Map } from './Map';
import { StationList } from './StationList';


export class Main extends PureComponent {
  static propTypes = {
    isLoadingStations: PropTypes.bool.isRequired,
    stations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    const { isLoadingStations, stations } = this.props;

    return (
      <div>
        <Map stations={stations} />
        <StationList isLoading={isLoadingStations} stations={stations} />
      </div>
    );
  }
}
