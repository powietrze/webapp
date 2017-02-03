import React, { PropTypes } from 'react';

import styles from './NavBarButton.css';


export class NavBarButton extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <button {...this.props} className={styles.NavBarButton}>
        {this.props.children}
      </button>
    );
  }
}
