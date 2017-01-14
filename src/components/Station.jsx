import React, {
  PureComponent
} from 'react';
import {Link} from 'react-router';

import styles from './Station.css';


export class Station extends PureComponent {
  render() {
    return (
      <div className={styles.station}>
        <Link to={`/station/${this.props.children}/`}>
          {this.props.children}
        </Link>
      </div>
    );
  }
}
