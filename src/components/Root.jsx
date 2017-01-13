import Inferno from 'inferno';
import Component from 'inferno-component';

import './body.css';
import {NavBar} from './NavBar.jsx';
import styles from './Root.css';


export class Root extends Component {
  render() {
    return (
      <div className={styles.root}>
        <NavBar routeParams={this.props.params}/>
        {this.props.children}
      </div>
    );
  }
}
