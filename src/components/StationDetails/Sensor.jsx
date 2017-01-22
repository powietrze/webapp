import React, {
  PureComponent,
} from 'react';

import { SensorContents } from './propTypes';


export class Sensor extends PureComponent {
  static propTypes = SensorContents;

  render() {
    const { paramFormula, paramName, readings } = this.props;

    return (
      <div>
        SENSOR: {paramFormula}, {paramName}, {readings.size}
      </div>
    );
  }
}
