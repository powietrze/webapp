import React, {
  PureComponent
} from 'react';

import './body.css';
import {NavBar} from './NavBar.jsx';
import styles from './Root.css';


export class Root extends PureComponent {
  static path = '/';

  handlePop = () => {
    this.props.router.goBack();
  };

  render() {
    const {router} = this.props;
    const showBackButton = !router.isActive(Root.path, true);

    return (
      <div className={styles.root}>
        <NavBar showBackButton={showBackButton} onPop={this.handlePop}/>
        {this.props.children}
      </div>
    );
  }
}
