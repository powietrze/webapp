import Inferno from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

import styles from './Station.css';


export class Station extends Component {
  render() {
    return (
      <div className={styles.station}>
        <Link to={`/station/${this.props.children}`}>
          {this.props.children}
        </Link>
      </div>
    );
  }
}
