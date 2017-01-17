import React, {
  PureComponent,
  PropTypes,
} from 'react';

import { Station } from './Station';

export class StationList extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    stations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    const { isLoading, stations } = this.props;

    return (
      <div>
        {isLoading && 'Ładuję...'}
        {!isLoading && stations.map(s => <Station key={s.id} id={s.id}>{s.name}</Station>)}
      </div>
    );
  }
}
