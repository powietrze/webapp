import React, {PureComponent} from 'react';

import './body.css';
import {NavBar} from './NavBar.jsx';
import styles from './Root.css';


export class Root extends PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <NavBar routeParams={this.props.params}/>
        {this.props.children}
      </div>
    );
  }
}
