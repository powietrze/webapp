import React, {
  PureComponent,
  PropTypes,
} from 'react';
import { Link } from 'react-router';

import styles from './Station.css';


export class Station extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };

  render() {
    const { id, children } = this.props;

    return (
      <div className={styles.station}>
        <Link to={`/station/${id}/`}>
          {children}
        </Link>
      </div>
    );
  }
}
