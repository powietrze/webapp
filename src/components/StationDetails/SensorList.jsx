import React, {
  PureComponent,
  PropTypes,
} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { SensorPropType } from './propTypes';
import { Sensor } from './Sensor';
import styles from './SensorList.css';


export class SensorList extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    sensors: ImmutablePropTypes.listOf(SensorPropType).isRequired,
  };

  render() {
    const { isLoading, sensors } = this.props;
    return (
      <div className={styles.SensorList}>
        <span className={styles.Title}>Odczyty:</span>
        {isLoading && 'Ładuję...'}
        {!isLoading &&
        sensors.map(s => (
          <Sensor
            key={s.get('id')}
            paramFormula={s.get('paramFormula')}
            paramName={s.get('paramName')}
            readings={s.get('readings')}
          />
        ))
        }
      </div>
    );
  }
}
