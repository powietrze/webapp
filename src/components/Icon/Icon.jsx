import React, { PropTypes } from 'react';

import ArrowLeft from './arrow-left.svg';
import styles from './Icon.css';


const IconTypes = ['arrow-left', 'star-filled', 'star-outline'];


export class Icon extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(IconTypes).isRequired,
  };

  render() {
    return (
      <ArrowLeft className={styles.Icon} />
    );
  }
}
