import React, {
  PureComponent,
  PropTypes,
} from 'react';

import {Map} from './Map';
import {StationList} from './StationList';


export class Main extends PureComponent {
  static propTypes = {
    isLoadingStations: PropTypes.bool.isRequired,
  };

  render() {
    const {isLoadingStations} = this.props;

    return (
      <div>
        <Map />
        <StationList isLoading={isLoadingStations}/>
      </div>
    );
  }
}
