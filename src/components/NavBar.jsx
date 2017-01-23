/* eslint-global window */

import React, {
  PureComponent,
  PropTypes,
} from 'react';

import styles from './NavBar.css';


export class NavBar extends PureComponent {
  static propTypes = {
    showBackButton: PropTypes.bool.isRequired,
    customTitle: PropTypes.string,
    onPop: PropTypes.func.isRequired,
  };

  render() {
    const { showBackButton, customTitle, onPop } = this.props;
    const title = customTitle || 'Powietrze';
    return (
      <div className={styles.navBar}>
        {showBackButton && <button onClick={onPop}>back</button>}
        {title}
      </div>
    );
  }
}
