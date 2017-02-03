/* eslint-global window */

import React, {
  PureComponent,
  PropTypes,
} from 'react';

import { Icon } from './Icon';
import { NavBarButton } from './NavBar/NavBarButton';
import styles from './NavBar.css';


export class NavBar extends PureComponent {
  static propTypes = {
    showBackButton: PropTypes.bool.isRequired,
    customTitle: PropTypes.string,
    onPop: PropTypes.func.isRequired,
  };

  render() {
    const { showBackButton, customTitle, onPop } = this.props;
    const title = customTitle || 'Czym Oddychamy';

    return (
      <div className={styles.NavBar}>
        <div className={styles.ButtonWrapper}>
          {showBackButton &&
          <NavBarButton onClick={onPop}><Icon type="arrow-left" /></NavBarButton>
          }
        </div>
        <div className={styles.TitleWrapper}>
          <span className={styles.Title}>{title}</span>
        </div>
        <div className={styles.ButtonWrapper} />
      </div>
    );
  }
}
