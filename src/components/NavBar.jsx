import Inferno from 'inferno';
import Component from 'inferno-component';
import {browserHistory} from 'inferno-router';

import styles from './NavBar.css';


export class NavBar extends Component {
  render() {
    return (
      <div className={styles.navBar}>
        Powietrze
      </div>
    );
  }
}
