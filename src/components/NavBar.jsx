import React, {PureComponent} from 'react';
import {browserHistory} from 'react-router';

import styles from './NavBar.css';


export class NavBar extends PureComponent {
  render() {
    return (
      <div className={styles.navBar}>
        Powietrze
      </div>
    );
  }
}
