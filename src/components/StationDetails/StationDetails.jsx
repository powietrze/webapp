import React, {
  PureComponent,
  PropTypes,
} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { SensorPropType } from './propTypes';
import { StationHeader } from './StationHeader';
import { SensorList } from './SensorList';
import styles from './StationDetails.css';


export class StationDetails extends PureComponent {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
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
    const { name, street, isLoading, sensors } = this.props;

    return (
      <div className={styles.StationDetails}>
        <StationHeader name={name} street={street} />
        <SensorList isLoading={isLoading} sensors={sensors} />
      </div>
    );
  }
}
