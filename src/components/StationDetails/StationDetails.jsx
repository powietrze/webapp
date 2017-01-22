import React, {
  PureComponent,
  PropTypes,
} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { SensorPropType } from './propTypes';
import { SensorList } from './SensorList';


export class StationDetails extends PureComponent {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
    sensors: ImmutablePropTypes.listOf(SensorPropType).isRequired,
    onSetup: PropTypes.func.isRequired,
  };

  static path = '/station/:id/';

  componentDidMount() {
    const { onSetup, params } = this.props;
    onSetup(params.id);
  }

  render() {
    const { isLoading, sensors } = this.props;

    return (
      <div>
        <SensorList isLoading={isLoading} sensors={sensors} />
      </div>
    );
  }
}
