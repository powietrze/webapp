import React, {
  PureComponent,
  PropTypes,
} from 'react';

import styles from './StationHeader.css';


export class StationHeader extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    street: PropTypes.string,
  };

  render() {
    const { name, street } = this.props;

    return (
      <div className={styles.StationHeader}>
        <span className={styles.Title}>Pełna nazwa:</span>
        <span className={styles.Value}>{name}</span>

        {street && <span className={styles.Title}>Ulica:</span>}
        {street && <span className={styles.Value}>{street}</span>}
      </div>
    );
  }
}
