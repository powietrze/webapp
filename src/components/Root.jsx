import React, {
  PureComponent,
  PropTypes,
} from 'react';

import './body.css';
import { NavBar } from './NavBar';
import styles from './Root.css';


export class Root extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    router: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }),
    fetchStations: PropTypes.func.isRequired,
  };

  static path = '/';

  componentDidMount = () => {
    this.props.fetchStations();
  };

  handlePop = () => {
    this.props.router.goBack();
  };

  render() {
    const { router } = this.props;
    const showBackButton = !router.isActive(Root.path, true);

    return (
      <div className={styles.root}>
        <NavBar showBackButton={showBackButton} onPop={this.handlePop} />
        {this.props.children}
      </div>
    );
  }
}
