import React, {
  PureComponent,
} from 'react';

import { SensorContents } from './propTypes';
import styles from './Sensor.css';

export class Sensor extends PureComponent {
  static propTypes = SensorContents;

  render() {
    const { paramFormula, paramName, readings } = this.props;

    const lastReading = (readings.last() && readings.last().get('value')) || null;
    const percentage = paramPercentage(paramFormula, lastReading);

    return (
      <div className={styles.Sensor}>
        <div className={styles.Minor}>
          <span>{paramName}</span>
          {lastReading !== null && <span>{lastReading.toFixed(2)} µg/m3</span>}
        </div>
        <div className={styles.Major}>
          <span className={styles.ParamFormula}>{paramFormula}</span>
          {lastReading === null && <span>Brak odczytów</span>}
          {lastReading !== null && <span className={styles.Percentage}>{percentage}%</span>}
        </div>
        <div className={styles.BarComponent}>
          <div className={styles.Bar} style={{ width: `${100 - Math.min(percentage, 100)}%` }} />
        </div>
      </div>
    );
  }
}

const map = {
  'PM2.5': 25,
  PM10: 50,
  NO2: 40,
  SO2: 125,
  O3: 120,
  CO: 11.1,
  C6H6: 5,
};

const paramPercentage = (formula, value) => {
  const maxLevel = map[formula];
  return maxLevel ? ((value / maxLevel) * 100).toFixed(1) : 0;
};
