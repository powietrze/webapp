/* eslint-global window */

import React, {
  PureComponent,
  PropTypes,
} from 'react';

import styles from './NavBar.css';


export class NavBar extends PureComponent {
  static propTypes = {
    showBackButton: PropTypes.bool.isRequired,
    onPop: PropTypes.func.isRequired,
  };

  render() {
    const { showBackButton, onPop } = this.props;
    return (
      <div className={styles.navBar}>
        {showBackButton && <button onClick={onPop}>back</button>}
        Powietrze
      </div>
    );
  }
}
